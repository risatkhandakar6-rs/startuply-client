// src/app/all-ideas/page.jsx
import IdeaCard from '@/components/Idea'
import SearchFilter from '@/components/SearchFilter'
import { Suspense } from 'react'

async function IdeasList({ searchParams }) {
  const params = await searchParams
  
  const query = new URLSearchParams();
  ['search', 'category', 'from', 'to'].forEach((key)=> {
    if(params[key])query.set(key,params[key])
  })
  const res = await fetch(`http://localhost:4000/idea?${query.toString()}`,{cache:'no-store'})
  const ideas = await res.json()

  return (
    <div>
      <SearchFilter></SearchFilter>
      <div className="grid grid-cols-3 gap-5">
      {ideas.map((idea) => (
        <div key={idea._id} className="">
          
          <IdeaCard idea={idea} key={idea._id}></IdeaCard>
        </div>
      ))}
    </div>
    </div>
  )
}

export default function AllIdeas({searchParams}) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">All Ideas</h1>
      <Suspense fallback={<p>Loading ideas...</p>}>
        <IdeasList searchParams={searchParams} />
      </Suspense>
    </main>
  )
}