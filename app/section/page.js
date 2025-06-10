import Link from "next/link";

function Section() {
  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-800 text-center mb-6 sm:mb-8">
          Select a Section
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[...Array(9)].map((_, i) => (
            <Link key={i} href={`/section/${i + 1}`} className="block">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all text-center h-full flex items-center justify-center">
                <span className="text-base sm:text-lg font-medium text-slate-800">
                  Section {i + 1}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
