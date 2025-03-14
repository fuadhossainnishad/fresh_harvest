import Image from 'next/image'
import React from 'react'

export default function Download() {
  return (
     <main className="w-full space-y-3">
              <h1 className="text-sm">Download</h1>
              <div className="flex gap-5">
                <Image
                  src="/icons/appStore.svg"
                  alt="logo"
                  width={138}
                  height={40}
                  unoptimized
                  priority
                  className="object-cover w-auto h-auto"
                />
                <Image
                  src="/icons/googlePlay.svg"
                  alt="logo"
                  width={138}
                  height={40}
                  unoptimized
                  priority
                  className="object-cover  "
                />
              </div>
            </main>
  )
}
