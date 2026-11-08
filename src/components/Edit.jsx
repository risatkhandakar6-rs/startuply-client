import { Card } from '@heroui/react'
import React from 'react'

export default function Edit() {
  return (
  //  <main className="min-h-screen bg-[#F8F9FC] px-4 py-12 sm:px-6">
  //        <div className="mx-auto max-w-3xl">
   
  //          {/* Header */}
  //          <div className="mb-10 text-center">
  //            <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-2 text-xs font-bold tracking-wider text-violet-600">
  //              🚀 STARTUPLY COMMUNITY
  //            </span>
   
  //            <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
  //              Share Your Big Idea
  //            </h1>
   
  //            <p className="text-sm leading-6 text-gray-500 sm:text-base">
  //              Every great startup begins with an idea.
  //              Share yours with the world!
  //            </p>
  //          </div>
   
  //          {/* Form UI */}
  //          <Card>
  //            <Form>
  //              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-gray-200/50 sm:p-9">
   
  //            {/* Section 01 */}
  //            <div className="mb-8 flex items-center gap-4">
  //              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
  //                01
  //              </div>
   
  //              <div>
  //                <h2 className="text-lg font-bold text-gray-900">
  //                  Basic Information
  //                </h2>
  //                <p className="text-sm text-gray-500">
  //                  Tell us about your startup idea.
  //                </p>
  //              </div>
  //            </div>
   
  //            {/* Idea Title */}
  //             <div className="mb-6">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Idea Title
  //              </label>
  //              <input
  //                type="text"
  //                name="title"
  //                placeholder="e.g. Smart Learning Platform"
  //                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
  //              />
  //            </div>
   
  //            {/* Short Description */}
  //            <div className="mb-6">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Short Description
  //              </label>
  //              <input
  //                type="text"
  //                name="shortDescription"
  //                placeholder="Describe your idea in one sentence"
  //                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
  //              />
  //            </div>
   
  //            {/* Detailed Description */}
  //            <div className="mb-6">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Detailed Description
  //              </label>
  //              <textarea
  //                name="detailedDescription"
  //                rows="5"
  //                placeholder="Explain your startup idea in detail..."
  //                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
  //              />
  //            </div>
   
  //            {/* Category & Tags */}
  //            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
   
  //              <div>
  //                <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                  Category
  //                </label>
  //                <select
  //                  name="category"
  //                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //                >
  //                  <option value="">Select Category</option>
  //                  <option value="Technology">Technology</option>
  //                  <option value="AI">Artificial Intelligence</option>
  //                  <option value="Health">Health</option>
  //                  <option value="Education">Education</option>
  //                  <option value="Finance">Finance</option>
  //                  <option value="E-commerce">E-commerce</option>
  //                  <option value="Environment">Environment</option>
  //                  <option value="Other">Other</option>
  //                </select>
  //              </div>
   
  //              <div>
  //                <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                  Tags
  //                </label>
  //                <input
  //                  type="text"
  //                  name="tags"
  //                  placeholder="AI, SaaS, Education"
  //                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //                />
  //              </div>
   
  //            </div>
   
  //            {/* Image URL */}
  //            <div className="mb-6">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Image URL
  //              </label>
  //              <input
  //                type="url"
  //                name="imageURL"
  //                placeholder="https://example.com/image.png"
  //                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //              />
  //            </div>
   
  //            {/* Budget */}
  //            <div className="mb-10">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Estimated Budget ($)
  //              </label>
  //              <input
  //                type="number"
  //                name="budget"
  //                min="0"
  //                placeholder="e.g. 5000"
  //                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //              />
  //            </div>
   
  //            {/* Section 02 */}
  //            <div className="mb-8 flex items-center gap-4 border-t border-gray-100 pt-8">
  //              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
  //                02
  //              </div>
   
  //              <div>
  //                <h2 className="text-lg font-bold text-gray-900">
  //                  Problem & Solution
  //                </h2>
  //                <p className="text-sm text-gray-500">
  //                  Explain the purpose behind your idea.
  //                </p>
  //              </div>
  //            </div>
   
  //            {/* Target Audience */}
  //            <div className="mb-6">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Target Audience
  //              </label>
  //              <input
  //                type="text"
  //                name="targetAudience"
  //                placeholder="Who will use your product?"
  //                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //              />
  //            </div>
   
  //            {/* Problem Statement */}
  //            <div className="mb-6">
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Problem Statement
  //              </label>
  //              <textarea
  //                name="problemStatement"
  //                rows="4"
  //                placeholder="What problem are you trying to solve?"
  //                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //              />
  //            </div>
   
  //            {/* Proposed Solution */}
  //            <div>
  //              <label className="mb-2 block text-sm font-semibold text-gray-700">
  //                Proposed Solution
  //              </label>
  //              <textarea
  //                name="proposedSolution"
  //                rows="4"
  //                placeholder="How will your startup solve this problem?"
  //                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
  //              />
  //            </div>
   
  //              </div>
  //              <button className='btn'>add idea</button>
  //            </Form>
  //          </Card>
  //        </div>
    //      </main>
    <div>edit</div>
     
  )
}
