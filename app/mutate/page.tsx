import StepIndicator from "../components/StepIndicator";

export default function MutatePage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="pt-12 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Recipe Mutation Engine
        </h1>
        <p className="mt-2 text-slate-500">
          NutriLens optimizes recipes for better health outcomes.
        </p>
      </div>

      <StepIndicator currentPath="/recipes" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* ORIGINAL */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Original Recipe
          </h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>Calories: 420 kcal</li>
            <li>Fat: High</li>
            <li>Cooking method: Pan-fried</li>
          </ul>
        </div>

        {/* MUTATED */}
        <div className="rounded-2xl bg-green-50 border border-green-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-green-800">
            Optimized Recipe
          </h2>
          <ul className="mt-4 space-y-2 text-green-700">
            <li>Calories: 310 kcal</li>
            <li>Fat: Reduced</li>
            <li>Cooking method: Air-fried</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
