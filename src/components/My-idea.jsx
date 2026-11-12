import { Separator } from "@heroui/react";
import Link from "next/link";

export default function Myidea({ idea }) {
  const { ideaId, title, shortDescription, category, imageURL, budget } = idea;

  return (
    <div className="flex  w-full flex-col gap-20 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg md:h-44 md:flex-row">
      {/* Left corner: wide image (16:9) */}
      <div className="aspect-video w-full shrink-0 bg-gray-100 md:h-full md:w-auto">
        {imageURL ? (
          <img
            src={imageURL}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            No image
          </div>
        )}
      </div>
    

      {/* Right: data takes the rest */}
      <div className="flex flex-1 flex-col justify-center p-5">
        {category && (
          <span className="mb-2 w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {category}
          </span>
        )}

        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

        {shortDescription && (
          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
            {shortDescription}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          {budget && (
            <p className="text-lg font-bold text-gray-900">${budget}</p>
          )}
          <Link
            href={`/all-ideas/${ideaId}`}
            className="rounded-lg bg-[#216B50] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}