export default function QuestionCard({
  question,
  index,
  selectedIndex,
  onSelect,
  showCorrect,
  correctIndex,
}) {
  const getOptionStyle = (optionIndex) => {
    if (!showCorrect) {
      return selectedIndex === optionIndex
        ? "bg-sky-200 border-2 border-sky-600 text-slate-900 font-semibold"
        : "bg-white border-2 border-slate-300 hover:bg-slate-100 text-slate-900";
    }

    if (optionIndex === correctIndex) {
      return "bg-green-200 border-2 border-green-600 text-slate-900 font-semibold";
    }
    if (selectedIndex === optionIndex && optionIndex !== correctIndex) {
      return "bg-red-200 border-2 border-red-600 text-slate-900 font-semibold";
    }
    return "bg-white border-2 border-slate-300 hover:bg-slate-100 text-slate-900";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-medium">
          {index + 1}
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-slate-800 mb-4">
            {question.question}
          </h3>
          <div className="space-y-3">
            {question.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => onSelect(question.id, i)}
                disabled={showCorrect}
                className={`w-full text-left p-4 rounded-lg transition-colors
                  ${getOptionStyle(i)}
                  ${showCorrect ? "cursor-default" : "cursor-pointer"}`}>
                {choice}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
