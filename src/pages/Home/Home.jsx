import React, { Suspense } from 'react'
import Hero from '../../components/Hero/Hero'
import Trending from '../../components/Trending/Trending'
import { useLoaderData } from 'react-router'

export default function Home() {
  const apps = useLoaderData()
  console.log(apps)
  const trending = [...apps].sort((a, b) => b.downloads - a.downloads).slice(0, 8);
  return (
    <div>
      <Hero />
      <Suspense fallback={<span>Loading</span>}>
        <Trending trending={trending} />
      </Suspense>
    </div>
  )
}
