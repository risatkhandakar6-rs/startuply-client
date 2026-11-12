'use client'
import Image from "next/image";
import Link from "next/link";

export default function FeaturedIdea({idea}) {
  const {
  _id,
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
} = idea;
  return (
    <div className="w-full max-w-[345px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="flex  items-center justify-center">
        <Image src={imageURL} alt={title} width={200} height={200}></Image>
       
      </div>

      {/* Card Content */}
      <div className="p-4">

        {/* Category */}
        <span className="inline-block rounded-full bg-[#E4F0EB] px-3 py-1 text-xs font-medium text-[#176B50]">
      {category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-bold text-gray-900">
        {title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {shortDescription}
        </p>

        {/* Budget */}
        <p className="mt-3 text-base font-semibold text-gray-900">
       {budget}
        </p>

        {/* Button */}
        {/* <button className="mt-3 w-full rounded-lg bg-[#216B50] py-3 text-sm font-semibold text-white transition hover:bg-[#18563F]">
          View details
        </button> */}
        <Link href={`/all-ideas/${_id}`}>details</Link>

      </div>
    </div>
  );
}