type Step = {
  label: string;
  path: string;
};

const steps: Step[] = [
  { label: "Scan", path: "/scan" },
  { label: "Ingredients", path: "/ingredients" },
  { label: "Nutrition", path: "/nutrition" },
  { label: "Recipes", path: "/recipes" },
];

export default function StepIndicator({
  currentPath,
}: {
  currentPath: string;
}) {
  const currentIndex = steps.findIndex(
    (s) => s.path === currentPath
  );

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 mb-14">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = index === currentIndex;
          const isCompleted = index < currentIndex;

          return (
            <div
              key={step.path}
              className="flex-1 flex items-center"
            >
              {/* STEP CIRCLE */}
              <div
                className={`h-9 w-9 rounded-full flex items-center justify-center text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-green-600 text-white shadow-sm ring-4 ring-green-100"
                      : isCompleted
                      ? "bg-green-100 text-green-600"
                      : "bg-slate-200 text-slate-500"
                  }`}
              >
                {index + 1}
              </div>

              {/* LABEL */}
              <span
                className={`ml-2 text-sm font-medium transition
                  ${
                    isActive
                      ? "text-slate-900"
                      : isCompleted
                      ? "text-slate-700"
                      : "text-slate-400"
                  }`}
              >
                {step.label}
              </span>

              {/* CONNECTOR */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4 h-px bg-slate-200" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
