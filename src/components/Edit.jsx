'use client'
import { Modal, Button, Surface } from '@heroui/react'
import {Envelope} from "@gravity-ui/icons";
import { FaEdit } from "react-icons/fa";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';


export default function Edit({ idea }) {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const {
    title,
    shortDescription,
    detailedDescription,
    category,
    tags,
    imageURL,
    budget,
    targetAudience,
    problemStatement,
    proposedSolution,
    _id
  } = idea;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedIdea = Object.fromEntries(formData.entries());
    updatedIdea.budget = Number(updatedIdea.budget);

    const {data:tokenData}=await authClient.token()

    const res = await fetch(`http://localhost:4000/ideas/${_id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          authorization:`Bearer ${tokenData?.token}`
        },
        body:JSON.stringify(updatedIdea)
      }
    )
    const data = await res.json();
    console.log(data, 'this is data')
    if (res.ok) {
      setIsOpen(false);
      route.refresh()
    }
  }
  return (
 
      <Modal onOpenChange={setIsOpen} isOpen={isOpen}>
    <Button className="btn border-[#6C696D] text-black" variant="secondary">
      <FaEdit /> Edit
    </Button>

    <Modal.Backdrop>
      <Modal.Container placement="center" className="!fixed !inset-0 !w-screen !h-dvh flex items-center justify-center p-3">
        <Modal.Dialog className="w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md md:max-w-2xl max-h-[90dvh] flex flex-col mx-auto">
          <Modal.CloseTrigger />

          <Modal.Header className="shrink-0">
            {/* <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              <Envelope className="size-5" />
            </Modal.Icon> */}
            <Modal.Heading className="text-lg sm:text-xl">Edit Idea</Modal.Heading>
            <p className="mt-1.5 text-xs sm:text-sm leading-5 text-muted">
              Update the idea details below and save your changes.
            </p>
          </Modal.Header>

          {/* Scrollable body */}
          <Modal.Body className="p-3 sm:p-6 overflow-y-auto flex-1">
            <Surface variant="default">
     
                
<form onSubmit={onSubmit} >
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-gray-200/50 sm:p-9">

          {/* Section 01 */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
              01
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Basic Information
              </h2>
              <p className="text-sm text-gray-500">
                Tell us about your startup idea.
              </p>
            </div>
          </div>

          {/* Idea Title */}
           <div className="mb-6" >
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Idea Title
            </label>
                      <input
                        defaultValue={title}
              type="text"
              name="title"
              placeholder="e.g. Smart Learning Platform"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
            />
          </div>

          {/* Short Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Short Description
            </label>
                      <input
                        defaultValue={shortDescription}
              type="text"
              name="shortDescription"
              placeholder="Describe your idea in one sentence"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
            />
          </div>

          {/* Detailed Description */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Detailed Description
            </label>
                      <textarea
                        defaultValue={detailedDescription}
              name="detailedDescription"
              rows="5"
              placeholder="Explain your startup idea in detail..."
              className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
            />
          </div>

          {/* Category & Tags */}
          <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Category
              </label>
                        <select
                          defaultValue={category}
                name="category"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
              >
                <option value="">Select Category</option>
                <option value="Technology">Technology</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="Health">Health</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Environment">Environment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Tags
              </label>
                        <input
                          defaultValue={tags}
                type="text"
                name="tags"
                placeholder="AI, SaaS, Education"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
              />
            </div>

          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Image URL
            </label>
                      <input
                        defaultValue={imageURL}
              type="url"
              name="imageURL"
              placeholder="https://example.com/image.png"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
            />
          </div>

          {/* Budget */}
          <div className="mb-10">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Estimated Budget ($)
            </label>
                      <input
                        defaultValue={budget}
              type="number"
              name="budget"
              min="0"
              placeholder="e.g. 5000"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
            />
          </div>

          {/* Section 02 */}
          <div className="mb-8 flex items-center gap-4 border-t border-gray-100 pt-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
              02
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Problem & Solution
              </h2>
              <p className="text-sm text-gray-500">
                Explain the purpose behind your idea.
              </p>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Target Audience
            </label>
                      <input
                        
                      defaultValue={targetAudience}
              type="text"
              name="targetAudience"
              placeholder="Who will use your product?"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
            />
          </div>

          {/* Problem Statement */}
          <div className="mb-6">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Problem Statement
            </label>
                      <textarea
                           defaultValue={problemStatement}
              name="problemStatement"
              rows="4"
              placeholder="What problem are you trying to solve?"
              className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
            />
          </div>

          {/* Proposed Solution */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Proposed Solution
            </label>
                      <textarea
                           defaultValue={proposedSolution}
              name="proposedSolution"
              rows="4"
              placeholder="How will your startup solve this problem?"
              className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-violet-500"
            />
          </div>

            </div>
            <button className='btn mt-5'>save change</button>
          </form>


            </Surface>
          </Modal.Body>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
  )
}
