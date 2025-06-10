"use client";

import { useParams } from "next/navigation";

export default function SectionPage() {
  const { id } = useParams();
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-8">
          Section {id}
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <p className="text-slate-600">
            Content for Section {id} will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
