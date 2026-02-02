import StepIndicator from "../components/StepIndicator";
<StepIndicator currentPath="/ingredients" />

type Ingredient = {
  name: string;
  confidence: number;
};

const ingredients: Ingredient[] = [
  { name: "Paneer", confidence: 0.92 },
  { name: "Tomato", confidence: 0.88 },
  { name: "Onion", confidence: 0.85 },
  { name: "Cooking Oil", confidence: 0.78 },
];

export default function IngredientsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Page Header */}
      <div className="pt-12 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Ingredient Analysis
        </h1>
        <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
          NutriLens has analyzed your food image and identified the
          ingredients below with confidence scores.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentPath="/ingredients" />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN — AI SUMMARY */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              AI Summary
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              The uploaded image appears to contain a{" "}
              <span className="font-medium text-slate-800">
                cooked vegetarian dish
              </span>{" "}
              primarily made from paneer and vegetables.
              <br />
              <br />
              The ingredients detected suggest a dish that is
              moderately high in protein but may contain elevated
              fats due to cooking oil usage.
            </p>

            <div className="mt-6 rounded-xl bg-green-50 border border-green-200 p-4">
              <p className="text-sm text-green-800 font-medium">
                ✔ Suitable for recipe optimization
              </p>
              <p className="mt-1 text-sm text-green-700">
                Healthier alternatives can reduce calories and fat.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — INGREDIENTS */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Detected Ingredients
            </h2>

            <div className="space-y-5">
              {ingredients.map((ing) => (
                <div key={ing.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-800 font-medium">
                      {ing.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {Math.round(ing.confidence * 100)}%
                    </span>
                  </div>

                  {/* Confidence bar */}
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{
                        width: `${ing.confidence * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 flex justify-between">
            <a
                href="/scan"
                className="text-sm text-slate-500 hover:text-slate-800 transition"
            >
                ← Scan another image
            </a>

            <a
                href="/nutrition"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-500 transition"
            >
                Continue →
            </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}