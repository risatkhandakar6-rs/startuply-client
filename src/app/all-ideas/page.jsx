// src/app/all-ideas/page.jsx
import IdeaCard from '@/components/Idea'
import { Suspense } from 'react'

async function IdeasList() {
  const res = await fetch('http://localhost:4000/ideas')
  const ideas = await res.json()

  return (
    <div className="grid grid-cols-3 gap-5">
      {ideas.map((idea) => (
        <div key={idea._id} className="">
          <h3 className="font-bold">{idea.title}</h3>
          <p className="text-sm text-gray-500">{idea.shortDescription}</p>
          <IdeaCard idea={idea} key={idea._id}></IdeaCard>
        </div>
      ))}
    </div>
  )
}

export default function AllIdeas() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">All Ideas</h1>
      <Suspense fallback={<p>Loading ideas...</p>}>
        <IdeasList />
      </Suspense>
    </main>
  )
}