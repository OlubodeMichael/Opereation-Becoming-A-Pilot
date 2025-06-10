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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    fetch("/data/split_questions.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }
        return res.json();
      })
      .then((data) => {
        const sectionKey = `section${id}`;
        if (data[sectionKey]) {
          setQuestions(data[sectionKey]);
        } else {
          console.error(`No questions found for section ${id}`);
        }
      })
      .catch((error) => {
        console.error("Error loading questions:", error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleAnswer = (qid, selectedIndex) => {
    setAnswers((prev) => ({ ...prev, [qid]: selectedIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correct_index) {
        correct++;
      }
    });
    const percentage = (correct / questions.length) * 100;
    return {
      correct,
      total: questions.length,
      percentage: Math.round(percentage),
    };
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setResults(score);
    setIsSubmitted(true);
  };

  const isAllAnswered =
    questions.length > 0 && Object.keys(answers).length === questions.length;

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

        {/* Results Display */}
        {isSubmitted && results && (
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Quiz Results
            </h2>
            <div className="space-y-2">
              <p className="text-slate-600">
                Score: {results.correct} out of {results.total} correct
              </p>
              <p className="text-slate-600">
                Percentage: {results.percentage}%
              </p>
              <div className="w-full bg-slate-200 rounded-full h-2.5 mt-4">
                <div
                  className="bg-sky-600 h-2.5 rounded-full"
                  style={{ width: `${results.percentage}%` }}></div>
              </div>
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
                showCorrect={isSubmitted}
                correctIndex={q.correct_index}
              />
            ))}
          </div>
        )}

        {/* Progress and Submit Button */}
        {!isLoading && questions.length > 0 && !isSubmitted && (
          <div className="mt-8 text-center space-y-4">
            <p className="text-slate-600">
              {Object.keys(answers).length} of {questions.length} questions
              answered
            </p>
            <button
              onClick={handleSubmit}
              disabled={!isAllAnswered}
              className={`px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-sm
                ${
                  isAllAnswered
                    ? "bg-sky-600 text-white hover:bg-sky-700"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}>
              Submit Answers
            </button>
          </div>
        )}

        {/* Retry Button */}
        {isSubmitted && (
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setAnswers({});
                setIsSubmitted(false);
                setResults(null);
              }}
              className="px-8 py-3 rounded-lg text-lg font-medium bg-sky-600 text-white hover:bg-sky-700 transition-colors shadow-sm">
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
