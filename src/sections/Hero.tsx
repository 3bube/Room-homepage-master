import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from './Header'
import { imageData } from './../data'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = imageData

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="lg:w-2/3 relative">
        <Header />
        <img
          src={images[currentIndex]}
          alt="Modern interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 lg:right-auto lg:left-full flex">
          <button
            className="bg-black hover:bg-gray-800 text-white p-4 lg:p-6 transition-colors"
            onClick={handlePrevClick}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="bg-black hover:bg-gray-800 text-white p-4 lg:p-6 transition-colors"
            onClick={handleNextClick}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="lg:w-1/3 p-6 sm:p-10 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 tracking-tight">
          Discover innovative ways to decorate
        </h2>
        <p className="mb-6 text-gray-600">
          We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and
          function in bringing your vision to life. Create a room in your own style with our collection and make your property a
          reflection of you and what you love.
        </p>
        <a
          href="/shop"
          className="flex items-center text-lg font-medium uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Shop now
          <img src="/images/icon-arrow.svg" alt="Arrow" className="ml-4 w-8" />
        </a>
      </div>
    </div>
  )
}