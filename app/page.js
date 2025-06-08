export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-slate-800">
            Operation: Become a Pilot
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Your complete preparation platform for the FAA Private Pilot
            Knowledge Test
          </p>
          <button className="bg-sky-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sky-700 transition-colors shadow-sm">
            Start Free Practice Test
          </button>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">
              Comprehensive Coverage
            </h3>
            <p className="text-slate-600">
              Practice with questions covering all FAA test topics including
              aerodynamics, weather, navigation, and regulations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">
              Real Test Experience
            </h3>
            <p className="text-slate-600">
              Simulate the actual FAA exam environment with timed practice tests
              and detailed explanations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">
              Track Progress
            </h3>
            <p className="text-slate-600">
              Monitor your performance and focus on areas that need improvement
              with our progress tracking system.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg mb-2 text-slate-800">
              Expert Support
            </h3>
            <p className="text-slate-600">
              Get help from experienced pilots and instructors when you need
              clarification on any topic.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-slate-800">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-600 mb-6">
            Join thousands of successful student pilots who passed their FAA
            written exam
          </p>
          <button className="bg-sky-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-sky-700 transition-colors shadow-sm">
            Get Started Now
          </button>
        </div>
      </main>
    </div>
  );
}
