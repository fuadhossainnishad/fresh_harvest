import Link from 'next/link'
import React from 'react'

export default function CustomerCartPage() {
    return (
        <main className='flex h-screen items-center justify-center'>
            <div className='space-y-3'>
                <div>There is no items in this cart</div>
                <Link href="/" ><div className='border-[1px] rounded-lg border-[#ff6a1a] text-center text-[#ff6a1a] px-6 py-3'>Continue shopping</div></Link>
            </div>

        </main>
    )
}
