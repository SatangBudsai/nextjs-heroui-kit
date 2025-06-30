import MainLayout from '@/layouts/main-layout'
import { Fragment, ReactElement, useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react'

type Props = {}

const Home = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const pcRef = useRef<RTCPeerConnection | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const webrtcUrl = "webrtc://192.168.2.41/live/teststream"

  useEffect(() => {
    const connectWebRTC = async () => {
      try {
        setIsLoading(true)
        setError(null)

        if (!videoRef.current) return

        // สร้าง RTCPeerConnection
        const pc = new RTCPeerConnection({
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' }
          ]
        })

        pcRef.current = pc

        // รับ stream จาก WebRTC
        pc.ontrack = (event) => {
          console.log('Received remote stream:', event.streams[0])
          if (videoRef.current && event.streams[0]) {
            videoRef.current.srcObject = event.streams[0]
            setIsConnected(true)
            setIsLoading(false)
          }
        }

        pc.oniceconnectionstatechange = () => {
          console.log('ICE connection state:', pc.iceConnectionState)
          switch (pc.iceConnectionState) {
            case 'connected':
            case 'completed':
              setIsConnected(true)
              setIsLoading(false)
              break
            case 'failed':
            case 'disconnected':
              setError('การเชื่อมต่อ WebRTC ล้มเหลว')
              setIsConnected(false)
              setIsLoading(false)
              break
            case 'checking':
            case 'new':
              setIsLoading(true)
              break
          }
        }

        pc.addEventListener('error', (event) => {
          console.error('WebRTC error:', event)
          setError('เกิดข้อผิดพลาดในการเชื่อมต่อ WebRTC')
          setIsLoading(false)
        })

        // สำหรับ WebRTC server ที่รองรับ WHEP (WebRTC-HTTP Egress Protocol)
        // หรือใช้ WebSocket signaling
        await connectToWebRTCServer(pc)

      } catch (err) {
        console.error('WebRTC initialization error:', err)
        setError('ไม่สามารถเชื่อมต่อ WebRTC ได้: ' + (err as Error).message)
        setIsLoading(false)
      }
    }

    const connectToWebRTCServer = async (pc: RTCPeerConnection) => {
      try {
        // วิธีที่ 1: ลอง SRS WebRTC API
        await connectViaSRS(pc)
      } catch (srsError) {
        console.log('SRS failed, trying generic WebRTC API:', srsError)

        try {
          // วิธีที่ 2: ลอง Generic WebRTC API
          await connectViaGenericAPI(pc)
        } catch (genericError) {
          console.log('Generic API failed, trying simple HTTP API:', genericError)

          try {
            // วิธีที่ 3: ลอง Simple HTTP API
            await connectViaSimpleHTTP(pc)
          } catch (httpError) {
            console.log('All methods failed:', httpError)
            throw new Error('ไม่สามารถเชื่อมต่อ WebRTC server ได้ กรุณาตรวจสอบการตั้งค่า server')
          }
        }
      }
    }

    const connectViaSRS = async (pc: RTCPeerConnection) => {
      // SRS (Simple Realtime Server) WebRTC API
      const srsApiUrl = 'http://192.168.2.41:1985/rtc/v1/play/'

      const offer = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      })

      await pc.setLocalDescription(offer)

      const response = await fetch(srsApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api: srsApiUrl,
          streamurl: 'webrtc://192.168.2.41/live/teststream',
          sdp: offer.sdp
        })
      })

      if (response.ok) {
        const result = await response.json()
        if (result.sdp) {
          await pc.setRemoteDescription({
            type: 'answer',
            sdp: result.sdp
          })
          return
        }
      }

      throw new Error(`SRS API failed: ${response.status}`)
    }

    const connectViaGenericAPI = async (pc: RTCPeerConnection) => {
      // ลอง API endpoints ทั่วไป
      const endpoints = [
        'http://192.168.2.41:8080/api/webrtc/play',
        'http://192.168.2.41:8080/rtc/play',
        'http://192.168.2.41:8080/webrtc/play',
        'http://192.168.2.41:8080/play/webrtc'
      ]

      const offer = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      })

      await pc.setLocalDescription(offer)

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              streamurl: 'webrtc://192.168.2.41/live/teststream',
              stream: 'teststream',
              app: 'live',
              sdp: offer.sdp,
              type: 'offer'
            })
          })

          if (response.ok) {
            const result = await response.json()
            if (result.sdp || result.answer) {
              await pc.setRemoteDescription({
                type: 'answer',
                sdp: result.sdp || result.answer
              })
              return
            }
          }
        } catch (err) {
          console.log(`Endpoint ${endpoint} failed:`, err)
        }
      }

      throw new Error('All generic API endpoints failed')
    }

    const connectViaSimpleHTTP = async (pc: RTCPeerConnection) => {
      // ลองใช้ HTTP API แบบง่าย
      const simpleEndpoints = [
        'http://192.168.2.41:8080/rtc',
        'http://192.168.2.41:8080/webrtc',
        'http://192.168.2.41:1985/rtc/v1/play/',
        'http://192.168.2.41:8080/api/rtc'
      ]

      const offer = await pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: true
      })

      await pc.setLocalDescription(offer)

      for (const endpoint of simpleEndpoints) {
        try {
          // ลอง POST แบบ JSON
          let response = await fetch(endpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              sdp: offer.sdp,
              stream: 'teststream'
            })
          })

          if (!response.ok) {
            // ลอง POST แบบ SDP
            response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/sdp',
              },
              body: offer.sdp
            })
          }

          if (response.ok) {
            const contentType = response.headers.get('content-type')
            let result

            if (contentType?.includes('application/json')) {
              result = await response.json()
              if (result.sdp || result.answer) {
                await pc.setRemoteDescription({
                  type: 'answer',
                  sdp: result.sdp || result.answer
                })
                return
              }
            } else {
              const sdp = await response.text()
              if (sdp && sdp.includes('v=0')) {
                await pc.setRemoteDescription({
                  type: 'answer',
                  sdp: sdp
                })
                return
              }
            }
          }
        } catch (err) {
          console.log(`Simple HTTP endpoint ${endpoint} failed:`, err)
        }
      }

      throw new Error('All simple HTTP endpoints failed')
    }

    connectWebRTC()

    return () => {
      // Cleanup
      if (pcRef.current) {
        pcRef.current.close()
        pcRef.current = null
      }
    }
  }, [])

  const handleReconnect = () => {
    if (pcRef.current) {
      pcRef.current.close()
    }
    window.location.reload()
  }

  return (
    <Fragment>
      <div className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">WebRTC Live Stream</h1>

          <div className="bg-black rounded-lg overflow-hidden shadow-lg relative">
            <div className="relative aspect-video">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <div className="text-white">กำลังเชื่อมต่อ WebRTC...</div>
                  </div>
                </div>
              )}

              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="text-center text-red-500 p-4">
                    <div className="text-xl mb-2">⚠️</div>
                    <div className="mb-4">{error}</div>
                    <button
                      onClick={handleReconnect}
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                    >
                      ลองใหม่
                    </button>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                controls={false}
                className="w-full h-full object-cover"
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => {
                  console.log('Video can play')
                  setIsLoading(false)
                }}
                onError={(e) => {
                  console.error('Video error:', e)
                  setError('ไม่สามารถเล่นวีดีโอได้')
                }}
              />

              {isConnected && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
                  🔴 LIVE
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="text-sm text-gray-600">
              <p><strong>Stream URL:</strong> {webrtcUrl}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  isConnected ? 'bg-green-500' : isLoading ? 'bg-yellow-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm">
                  {isConnected ? 'เชื่อมต่อแล้ว' : isLoading ? 'กำลังเชื่อมต่อ...' : 'ไม่ได้เชื่อมต่อ'}
                </span>
              </div>
            </div>
          </div>

          {/* ปุ่มควบคุม */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleReconnect}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'กำลังเชื่อมต่อ...' : 'เชื่อมต่อใหม่'}
            </button>

            <button
              onClick={() => {
                if (videoRef.current) {
                  if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen()
                  }
                }
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              disabled={!isConnected}
            >
              เต็มจอ
            </button>

            <button
              onClick={() => {
                if (videoRef.current) {
                  setIsMuted(!isMuted)
                  videoRef.current.muted = !videoRef.current.muted
                }
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              disabled={!isConnected}
            >
              {isMuted ? '🔇' : '🔊'}
            </button>
          </div>

          {/* คำแนะนำ */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium mb-2">คำแนะนำการตั้งค่า:</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• ตรวจสอบว่า WebRTC server รองรับ WHEP หรือ WebSocket signaling</li>
              <li>• ตรวจสอบการตั้งค่า CORS ของ server</li>
              <li>• ใช้ HTTPS ใน production environment</li>
              <li>• ตรวจสอบ firewall และ port ที่เปิดให้</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home

Home.auth = false

Home.getLayout = (page: ReactElement) => {
  return (
    <Fragment>
      <MainLayout>{page}</MainLayout>
    </Fragment>
  )
}
