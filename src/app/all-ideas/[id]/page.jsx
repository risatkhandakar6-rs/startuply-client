import Delete from "@/components/Delete";
import Edit from "@/components/Edit";
import Image from "next/image";
import Link from "next/link";

export default async function IdeaDetails({ params }) {
  const { id } = await params;

  const res = await fetch(`http://localhost:4000/ideas/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Idea not found</h1>
        <Link href="/all-ideas" className="mt-4 inline-block text-[#216B50] underline">
          Back to all ideas
        </Link>
      </div>
    );
  }

  const idea = await res.json();
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
  } = idea;

  const tagList = tags ? tags.split(",").map((t) => t.trim()).filter(Boolean) : [];

  return (
  <div className="flex w-full items-start justify-between gap-6 px-20">
  {/* Left spacer  */}
  <div className="hidden flex-1 lg:block" />

  {/* Main card */}
  <div className="w-full max-w-6xl px-4 py-10">
    <Link href="/all-ideas" className="text-base text-[#216B50] hover:underline">
      ← Back to all ideas
    </Link>

    {/* Image */}
    <div className="relative mt-5 h-[300px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-[420px] lg:h-[560px]">
      {imageURL ? (
        <Image
          src={imageURL}
          alt={title}
          fill
          sizes="(max-width: 1280px) 100vw, 1152px"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-base text-gray-500">
          No image
        </div>
      )}
    </div>

    {/* Header */}
    <div className="mt-8">
      <span className="inline-block rounded-full bg-[#E4F0EB] px-4 py-1.5 text-sm font-medium text-[#176B50]">
        {category}
      </span>
      <h1 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">{title}</h1>
      <p className="mt-3 text-lg text-gray-600">{shortDescription}</p>
    </div>

    {/* Quick info */}
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-gray-200 p-6">
        <p className="text-base text-gray-500">Budget</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">${budget}</p>
      </div>
      <div className="rounded-2xl border border-gray-200 p-6">
        <p className="text-base text-gray-500">Target audience</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{targetAudience}</p>
      </div>
    </div>

    {/* Long sections */}
    <section className="mt-10 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Description</h2>
        <p className="mt-3 text-lg leading-8 text-gray-700">{detailedDescription}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Problem</h2>
        <p className="mt-3 text-lg leading-8 text-gray-700">{problemStatement}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Proposed solution</h2>
        <p className="mt-3 text-lg leading-8 text-gray-700">{proposedSolution}</p>
      </div>
    </section>

    {/* Tags */}
    {tagList.length > 0 && (
      <div className="mt-10 flex flex-wrap gap-2">
        {tagList.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 px-4 py-1.5 text-base text-gray-700">
            #{tag}
          </span>
        ))}
      </div>
    )}
  </div>

  {/* Right side: Edit */}
  <div className="flex flex-1 justify-end pt-10">
    <div className="flex items-center gap-3">
          <Edit idea={idea} />
      <Delete></Delete>
    </div>
  </div>
</div>
  );
}