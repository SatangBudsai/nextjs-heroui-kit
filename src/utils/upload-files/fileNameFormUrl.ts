export const fileNameFromUrl = (url: string | null | undefined) => {
  if (!url) {
    return 'ไม่มีชื่อ'
  }
  const pathSegments = url.split('/')
  const lastSegment = pathSegments[pathSegments.length - 1]
  const fileName = lastSegment.split('?')[0]
  return fileName
}
