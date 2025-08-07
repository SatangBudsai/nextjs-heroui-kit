import React from 'react'
import { Image } from '@/components/heroui'

const ImageTest: React.FC = () => {
  return (
    <div className='space-y-8 p-8'>
      <div className='space-y-4'>
        <h1 className='text-3xl font-bold'>Image Component Test</h1>

        {/* Basic Image */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Basic Image</h2>
          <div className='flex gap-4'>
            <Image width={300} alt='NextUI hero Image' src='https://nextui.org/images/hero-card-complete.jpeg' />
          </div>
        </div>

        {/* Image with Blur */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image with Blur Placeholder</h2>
          <div className='flex gap-4'>
            <Image width={300} alt='NextUI Image with blur' src='https://nextui.org/images/album-cover.png' isBlurred />
          </div>
        </div>

        {/* Image Loading States */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image Loading States</h2>
          <div className='flex gap-4'>
            <Image
              width={200}
              height={200}
              alt='Loading image'
              src='https://nextui.org/images/fruit-1.jpeg'
              isLoading
            />
            <Image
              width={200}
              height={200}
              alt='Lazy loading image'
              src='https://nextui.org/images/fruit-2.jpeg'
              loading='lazy'
            />
          </div>
        </div>

        {/* Image Fallback */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image with Fallback</h2>
          <div className='flex gap-4'>
            <Image
              width={200}
              height={200}
              alt='Broken image with fallback'
              src='https://broken-url-that-does-not-exist.jpg'
              fallbackSrc='https://via.placeholder.com/200x200?text=Fallback'
            />
          </div>
        </div>

        {/* Image Sizes */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Different Image Sizes</h2>
          <div className='flex flex-wrap items-end gap-4'>
            <Image width={100} height={100} alt='Small image' src='https://nextui.org/images/fruit-3.jpeg' />
            <Image width={150} height={150} alt='Medium image' src='https://nextui.org/images/fruit-4.jpeg' />
            <Image width={200} height={200} alt='Large image' src='https://nextui.org/images/fruit-5.jpeg' />
          </div>
        </div>

        {/* Image with Radius */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image with Different Radius</h2>
          <div className='flex flex-wrap gap-4'>
            <Image
              width={150}
              height={150}
              radius='none'
              alt='No radius'
              src='https://nextui.org/images/fruit-6.jpeg'
            />
            <Image
              width={150}
              height={150}
              radius='sm'
              alt='Small radius'
              src='https://nextui.org/images/fruit-7.jpeg'
            />
            <Image
              width={150}
              height={150}
              radius='md'
              alt='Medium radius'
              src='https://nextui.org/images/fruit-8.jpeg'
            />
            <Image
              width={150}
              height={150}
              radius='lg'
              alt='Large radius'
              src='https://nextui.org/images/hero-card.jpeg'
            />
            <Image
              width={150}
              height={150}
              radius='full'
              alt='Full radius'
              src='https://nextui.org/images/album-cover.png'
            />
          </div>
        </div>

        {/* Image with Shadow */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image with Shadow</h2>
          <div className='flex flex-wrap gap-4'>
            <Image
              width={200}
              height={200}
              alt='Image with shadow'
              src='https://nextui.org/images/fruit-1.jpeg'
              shadow='sm'
            />
            <Image
              width={200}
              height={200}
              alt='Image with medium shadow'
              src='https://nextui.org/images/fruit-2.jpeg'
              shadow='md'
            />
            <Image
              width={200}
              height={200}
              alt='Image with large shadow'
              src='https://nextui.org/images/fruit-3.jpeg'
              shadow='lg'
            />
          </div>
        </div>

        {/* Zoomed Image */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Zoomed Image</h2>
          <div className='flex gap-4'>
            <Image width={200} height={200} alt='Zoomed image' src='https://nextui.org/images/fruit-4.jpeg' isZoomed />
            <Image
              width={200}
              height={200}
              alt='Zoomed blurred image'
              src='https://nextui.org/images/fruit-5.jpeg'
              isZoomed
              isBlurred
            />
          </div>
        </div>

        {/* Image Gallery */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image Gallery</h2>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
              <Image
                key={index}
                width={200}
                height={200}
                alt={`Gallery image ${index}`}
                src={`https://nextui.org/images/fruit-${(index % 8) + 1}.jpeg`}
                className='object-cover'
                isZoomed
              />
            ))}
          </div>
        </div>

        {/* Responsive Images */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Responsive Images</h2>
          <div className='space-y-4'>
            <Image
              width='100%'
              height={300}
              alt='Responsive image'
              src='https://nextui.org/images/hero-card-complete.jpeg'
              className='object-cover'
            />
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <Image
                width='100%'
                height={200}
                alt='Responsive image 1'
                src='https://nextui.org/images/album-cover.png'
                className='object-cover'
              />
              <Image
                width='100%'
                height={200}
                alt='Responsive image 2'
                src='https://nextui.org/images/hero-card.jpeg'
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Custom Styled Images */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Custom Styled Images</h2>
          <div className='flex flex-wrap gap-4'>
            <Image
              width={200}
              height={200}
              alt='Custom styled image'
              src='https://nextui.org/images/fruit-6.jpeg'
              classNames={{
                wrapper: 'border-4 border-blue-500',
                img: 'object-cover transition-transform duration-300 hover:scale-110'
              }}
            />
            <Image
              width={200}
              height={200}
              alt='Gradient border image'
              src='https://nextui.org/images/fruit-7.jpeg'
              classNames={{
                wrapper: 'p-1 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-lg'
              }}
              radius='md'
            />
            <Image
              width={200}
              height={200}
              alt='Custom filter image'
              src='https://nextui.org/images/fruit-8.jpeg'
              classNames={{
                img: 'filter sepia hover:sepia-0 transition-all duration-300'
              }}
            />
          </div>
        </div>

        {/* Image as Button */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image as Button</h2>
          <div className='flex gap-4'>
            <Image
              as='button'
              width={150}
              height={150}
              alt='Clickable image'
              src='https://nextui.org/images/album-cover.png'
              onClick={() => alert('Image clicked!')}
              className='transform cursor-pointer transition-transform hover:scale-105'
            />
            <Image
              as='button'
              width={150}
              height={150}
              alt='Another clickable image'
              src='https://nextui.org/images/hero-card.jpeg'
              onClick={() => alert('Another image clicked!')}
              className='cursor-pointer opacity-80 transition-opacity hover:opacity-100'
            />
          </div>
        </div>

        {/* Image with Caption */}
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Image with Caption</h2>
          <div className='flex gap-4'>
            <figure className='text-center'>
              <Image
                width={200}
                height={200}
                alt='Beautiful landscape'
                src='https://nextui.org/images/hero-card-complete.jpeg'
                className='object-cover'
              />
              <figcaption className='mt-2 text-sm text-gray-600'>Beautiful landscape view</figcaption>
            </figure>
            <figure className='text-center'>
              <Image
                width={200}
                height={200}
                alt='Fresh fruits'
                src='https://nextui.org/images/fruit-1.jpeg'
                className='object-cover'
                isZoomed
              />
              <figcaption className='mt-2 text-sm text-gray-600'>Fresh organic fruits</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTest
