import Image from 'next/image'
import React from 'react'

export default function Download() {
  return (
     <main className="w-full">
              <h1 className="text-sm">Download</h1>
              <div className="flex justify-between">
                <Image
                  src="/icons/appStore.svg"
                  alt="logo"
                  width={138}
                  height={40}
                  priority
                  className="object-cover"
                />
                <Image
                  src="/icons/googlePlay.svg"
                  alt="logo"
                  width={138}
                  height={40}
                  priority
                  className="object-cover"
                />
              </div>
            </main>
  )
}
