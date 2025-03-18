import React from 'react'
import Link from 'next/link';

export default function IndivudualCartPage() {
  return (
    <main className=''>
      <div>There is no items in this cart</div>
      <Link href="/" >Continue shopping</Link>
    </main>
  )
}
