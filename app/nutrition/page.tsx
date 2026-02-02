import StepIndicator from "../components/StepIndicator";
<StepIndicator currentPath="/nutrition" />

type Macro = {
  label: string;
  value: string;
  note?: string;
};

const macros: Macro[] = [
  { label: "Calories", value: "420 kcal", note: "Moderate" },
  { label: "Protein", value: "22 g", note: "High" },
  { label: "Fat", value: "24 g", note: "High" },
  { label: "Carbohydrates", value: "18 g", note: "Low" },
];

export default function NutritionPage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Page Header */}
      <div className="pt-12 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Nutrition Analysis
        </h1>
        <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
          Based on the detected ingredients, NutriLens has estimated the
          nutritional composition of your food.
        </p>
      </div>

      {/* Step Indicator */}
      <StepIndicator currentPath="/nutrition" />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT — AI INSIGHTS */}
        <div className="lg:col-span-1">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              AI Health Insights
            </h2>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              The analyzed dish provides a{" "}
              <span className="font-medium text-slate-800">
                good amount of protein
              </span>{" "}
              due to paneer, making it suitable for muscle maintenance.
              <br />
              <br />
              However, the fat content is relatively high, likely from
              cooking oil. Reducing oil usage or opting for air-frying
              can significantly improve the health score.
            </p>

            {/* Health Score */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-700">
                Overall Health Score
              </p>
              <div className="mt-2 h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: "72%" }}
                />
              </div>
              <p className="mt-2 text-sm text-slate-500">
                72 / 100 — Can be improved with small changes
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — NUTRITION BREAKDOWN */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Nutritional Breakdown
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {macros.map((macro) => (
                <div
                  key={macro.label}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <p className="text-sm text-slate-500">
                    {macro.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">
                    {macro.value}
                  </p>
                  {macro.note && (
                    <p className="mt-1 text-sm text-slate-500">
                      {macro.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-end">
              <a
                href="/recipes"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-green-500 transition"
              >
                Generate recipes →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}