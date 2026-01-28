import React from 'react'

const HeroSection = () => {
  return (
<div>
    <section className="relative bg-gradient-to-r from-violet-50 to-orange-50">
      {/* BG Image */}
      {/* <img src="https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute -z-10 inline-block h-full w-full object-cover opacity-75" /> */}
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
          {/* Heading Content */}
          <div className="max-w-[720px]">
            <h1 className="mb-3 pb-4 text-4xl font-bold text-primary md:text-6xl">Graduating? Don't Leave Your Stuff Behind</h1>
            <p className="mb-6 max-w-[528px] text-xl md:mb-10">Sell textbooks, furniture, clothes & electronics to incoming students</p>
            <div className="flex items-center">
              <a href="#"
                className="mr-5 inline-block rounded-full bg-primary px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8">Let's
                Talk</a>
              <a href="#"
                className="flex max-w-full flex-row rounded-full border border-solid border-[#636262] px-6 py-4 font-bold">
                <p className="">Sell Now</p>
              </a>
            </div>
          </div>
          {/* Image Div */}
          <div>
            <img src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="mx-auto inline-block h-full w-full max-w-[640px] rounded-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
</div>
  )
}

export default HeroSection