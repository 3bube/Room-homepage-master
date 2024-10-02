import React from "react"

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row min-h-[400px] lg:min-h-[35vh]">
      <img
        src="/images/image-about-dark.jpg"
        alt="Dark furniture showcase"
        className="w-full md:w-1/3 h-64 md:h-auto object-cover"
      />

      <div className="flex flex-col items-start justify-center p-6 md:p-8 lg:p-10 w-full md:w-1/3">
        <h2 className="text-lg font-bold uppercase tracking-widest mb-4">
          About Our furniture
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme
          that best expresses your interests and what inspires you. Find the
          furniture pieces you need, from traditional to contemporary styles or
          anything in between. Product specialists are available to help you
          create your dream space.
        </p>
      </div>

      <img
        src="/images/image-about-light.jpg"
        alt="Light furniture showcase"
        className="w-full md:w-1/3 h-64 md:h-auto object-cover"
      />
    </div>
  )
}