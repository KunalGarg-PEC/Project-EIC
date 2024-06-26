/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cIeWSFNcrWA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from 'react-router-dom'

export default function HomePage() {
    
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
<section class="w-full pt-12 border-y bg-slate-400" data-id="12 " >
  <div className="px-4 flex justify-center" data-id="13">
    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16" data-id="14">
      <div data-id="15">
        <h1 className="lg:leading-tighter mt-11 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-center" data-id="16">
          A  One  Stop  Solution  For  Maintenance Of Your Housing Society.
        </h1>
        <h3 className="mt-10 text-2xl ml-10 font-bold flex flex-wrap">"Empowering Communities, One Click at a Time.</h3>
      </div>
      <div className="flex flex-col items-start space-y-4" data-id="17">
        <img className="rounded-full w-50 h-50" src="https://www.chsone.in/blog/wp-content/uploads/2018/03/32068293.jpg" alt="img-desc" />
      </div>
    </div>
  </div>
</section>



        
 
        <section class="w-full mt-5 py-12 md:py-24 lg:py-32" data-id="23"><div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6" data-id="24"><div class="space-y-3" data-id="25"><h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" data-id="26">
                Our Solutions
              </h2><p class="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400" data-id="27">
                We provide Innovative solutions to everyday problems. From
                home to healthcare, we've got you covered.
              </p></div><div class="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-4" data-id="28"><div class="flex flex-col items-center space-y-2" data-id="29"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12" data-id="30"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><h3 class="text-xl font-bold" data-id="31">Home Services</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-id="32">
                  Make your home smarter and your life more convenient.
                </p></div><div class="flex flex-col items-center space-y-2" data-id="33"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12" data-id="34"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg><h3 class="text-xl font-bold" data-id="35">Healthcare</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-id="36">
                  Accessible and personalized healthcare solutions for
                  everyone.
                </p></div><div class="flex flex-col items-center space-y-2" data-id="37"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12" data-id="38"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="16" cy="18" r="2"></circle></svg><h3 class="text-xl font-bold" data-id="39">Transportation</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-id="40">
                  Seamless and efficient travel experiences at your
                  fingertips.
                </p></div><div class="flex flex-col items-center space-y-2" data-id="41"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-12 w-12" data-id="42"><path d="m4 6 8-4 8 4"></path><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path><path d="M18 5v17"></path><path d="M6 5v17"></path><circle cx="12" cy="9" r="2"></circle></svg><h3 class="text-xl font-bold" data-id="43">Education</h3><p class="text-sm text-gray-500 dark:text-gray-400" data-id="44">
                  Empowering learning with technology for the next generation.
                </p></div></div></div>
          </section>



          <section className=" mt-3 relative h-[300px] bg-gray-200 dark:bg-gray-800">
          <img
            alt="Background"
            className="absolute inset-0 object-cover"
            height="300"
            src="https://vintageproperty.in/wp-content/uploads/2018/09/project-prestige-shantiniketan-elevation-2-1060x795px.jpg"
            style={{
              aspectRatio: "1440/475",
              objectFit: "cover",
            }}
            width="1440"
          />
        </section>

          
      </main>

    

    </div>
  )
}

