'use client'
import { useRouter, useSearchParams } from 'next/navigation';

const categories = ['All', 'Technology', 'AI', 'Health', 'Education', 'Finance', 'E-commerce', 'Environment', 'Other'];

export default function SearchFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (value && value !== 'All') params.set(key, value);
    }

    router.push(`/all-ideas?${params.toString()}`);
  };

  const onReset = () => router.push('/all-ideas');

  return (
    <form onSubmit={onSubmit} className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <input
        type="text"
        name="search"
        defaultValue={searchParams.get('search') || ''}
        placeholder="Search by title..."
        className="rounded-lg border px-3 py-2 text-sm"
      />

      <select
        name="category"
        defaultValue={searchParams.get('category') || 'All'}
        className="rounded-lg border px-3 py-2 text-sm"
      >
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      <input
        type="date"
        name="from"
        defaultValue={searchParams.get('from') || ''}
        className="rounded-lg border px-3 py-2 text-sm"
      />

      <input
        type="date"
        name="to"
        defaultValue={searchParams.get('to') || ''}
        className="rounded-lg border px-3 py-2 text-sm"
      />

      <div className="flex gap-2">
        <button type="submit" className="btn">Apply</button>
        <button type="button" onClick={onReset} className="btn btn-outline">Reset</button>
      </div>
    </form>
  );
}