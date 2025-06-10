"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import QuestionCard from "@/app/_components/QuestionCard";
import Link from "next/link";

export default function SectionPage() {
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    fetch("/data/split_questions.json")
      .then((res) => res.json())
      .then((data) => {
        const sectionKey = `section${id}`;
        if (data[sectionKey]) setQuestions(data[sectionKey]);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleAnswer = (qid, selectedIndex) => {
    setAnswers((prev) => ({ ...prev, [qid]: selectedIndex }));
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Section {id}</h1>
          <Link
            href="/section"
            className="text-sky-600 hover:text-sky-700 font-medium">
            ← Back to Sections
          </Link>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-pulse text-slate-600">
              Loading questions...
            </div>
          </div>
        )}

        {/* Questions */}
        {!isLoading && questions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">
              No questions found for this section.
            </p>
          </div>
        )}

        {!isLoading && questions.length > 0 && (
          <div className="space-y-6">
            {questions.map((q, i) => (
              <QuestionCard
                key={q.id}
                question={q}
                index={i}
                selectedIndex={answers[q.id]}
                onSelect={handleAnswer}
              />
            ))}
          </div>
        )}

        {/* Progress */}
        {!isLoading && questions.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-slate-600">
              {Object.keys(answers).length} of {questions.length} questions
              answered
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
