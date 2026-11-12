import { keycloak } from 'better-auth/plugins';
import React from 'react'
import FeaturedIdea from './FeaturedIdea';

export default async function Featured() {
  const res = await fetch('http://localhost:4000/featured');
  const data = await res.json()
  return (
    <div className='grid grid-cols-3 mx-auto container'>{data.map(idea => <FeaturedIdea idea={idea} key={idea.id}></FeaturedIdea>) }</div>
  )
}
