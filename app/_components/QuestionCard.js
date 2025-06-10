export default function QuestionCard({
  question,
  index,
  selectedIndex,
  onSelect,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 mb-6">
      <p className="text-lg font-semibold text-slate-800 mb-4">
        Q{index + 1}. {question.question}
      </p>
      <div className="space-y-3">
        {question.choices.map((choice, i) => {
          const isSelected = selectedIndex === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(question.id, i)}
              className={`w-full text-left p-4 rounded-lg border transition-colors
                ${
                  isSelected
                    ? "bg-sky-50 border-sky-200 text-sky-700"
                    : "bg-white border-slate-200 hover:border-sky-200 hover:bg-slate-50"
                }`}>
              <span className="font-medium text-slate-800">
                {String.fromCharCode(65 + i)}) {choice}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
