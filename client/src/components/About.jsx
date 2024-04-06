import React from "react";
import { Button } from "@/components/ui/button"

export default function About() {
    return (
      <div className="w-full py-12 lg:py-24">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Customers</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              “The customer service I received was exceptional. The support team went above and beyond to address my
              concerns.“
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 lg:max-w-6xl lg:grid-cols-2 lg:gap-10">
            <div className="flex items-center justify-center p-4 lg:p-6">
              <img
                alt="Avatar"
                className="rounded-full"
                height="160"
                src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
            </div>
            <div className="grid grid-rows-3 items-center justify-center gap-2 lg:grid-rows-1">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold">Ayush Mehta</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Secretary, Sun Society</p>
              </div>
             
            </div>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 lg:max-w-6xl lg:grid-cols-2 lg:gap-10">
            <div className="flex items-center justify-center p-4 lg:p-6">
              <img
                alt="Avatar"
                className="rounded-full"
                height="160"
                src="https://static.toiimg.com/thumb/msid-64838727,width-400,resizemode-4/64838727.jpg"
                style={{
                  aspectRatio: "160/160",
                  objectFit: "cover",
                }}
                width="160"
              />
            </div>
            <div className="grid grid-rows-3 items-center justify-center gap-2 lg:grid-rows-1">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-bold">Star Tower Society</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Noida, Uttar Pradesh</p>
              </div>
             
            </div>
          </div>



        </div>
      </div>
    )
  }