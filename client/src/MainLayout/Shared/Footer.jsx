import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer class="bg-white lg:px-32 px-4 pt-24 lg:pt-32">
    <div class="container  py-12 mx-auto">
        <div
        data-aos="fade-up"
        data-aos-duration="2000"
        class="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 class="text-xl text-center font-semibold tracking-tight text-gray-800 md:mx-3 xl:text-2xl">Subscribe newsletter to get update.</h1>
            
            <div class="mt-6 md:mx-3 w-[170px] mx-auto shrink-0 md:mt-0 md:w-auto">
                <a href="#" class="inline-flex items-center justify-center w-[170px] mx-auto md:w-full px-4 py-2 text-sm text-white duration-300 bg-blue-600 rounded-lg gap-x-3 font-medium focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    <span>Sign Up Now</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-10 "/>

        <div  
        data-aos="fade-up"
        data-aos-duration="2000"
        class="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
                <p class="font-semibold text-gray-800 ">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">Home</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300  ">Who We Are</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300  ">Our Philosophy</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 ">Industries</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">Retail & E-Commerce</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">Information Technology</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">Finance & Insurance</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 ">Services</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">Translation</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">Proofreading & Editing</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 d">Content Creation</a>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-800 ">Contact Us</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">+880 768 473 4978</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 ">info@x.com</a>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-10"/>
        
        <div
        class="flex flex-col items-center justify-between sm:flex-row">
            
            <h2 className=' text-2xl font-bold flex items-center  lg:text-3xl  '><span className='pb-2'><img className="w-10" src="https://lirp.cdn-website.com/65cebca4/dms3rep/multi/opt/2-640w.png" alt="" /></span>SkillForge</h2>
            <p class="mt-4 text-sm text-center text-gray-500 sm:mt-0 ">© Copyright 2024. All Rights Reserved By SkillForge.</p>
        </div>
    </div>
</footer>
    </div>
  )
}