import Link from "next/link";


export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
          Food intelligence,
          <br className="hidden sm:block" />
          built for healthier decisions
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          NutriLens uses AI to analyze food images, identify ingredients,
          estimate nutrition, and generate healthier recipe alternatives —
          all in a transparent, explainable way.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/scan"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3
                       text-white font-medium shadow-sm hover:bg-green-500 transition"
          >
            <span className="material-symbols-outlined text-lg">
              image_search
            </span>
            Scan your food
          </Link>

          <Link
            href="/ingredients"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-8 py-3
                       text-slate-700 font-medium hover:bg-slate-100 transition"
          >
            <span className="material-symbols-outlined text-lg">
              visibility
            </span>
            View demo
          </Link>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 border-t border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          How NutriLens works
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "Scan",
              icon: "photo_camera",
              desc: "Upload a food image using your device camera or gallery.",
            },
            {
              step: "Detect",
              icon: "list_alt",
              desc: "AI identifies ingredients with confidence scores.",
            },
            {
              step: "Analyze",
              icon: "monitor_heart",
              desc: "Nutrition and health insights are generated.",
            },
            {
              step: "Improve",
              icon: "auto_fix_high",
              desc: "Get healthier recipe variations instantly.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <span className="material-symbols-outlined">
                  {item.icon}
                </span>
                Step {i + 1}
              </div>

              <h3 className="mt-3 text-lg font-medium text-slate-900">
                {item.step}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY NUTRILENS ================= */}
      <section className="py-20 border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Designed for transparency,
              <br /> not black-box AI
            </h2>

            <p className="mt-4 text-slate-600">
              Most food and health apps provide results without explaining
              how they were generated.
              <br />
              <br />
              NutriLens focuses on explainable AI — showing detected
              ingredients, confidence levels, and clear reasoning behind
              nutrition scores.
            </p>
          </div>

          <div className="rounded-2xl bg-green-50 border border-green-200 p-8">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Ingredient-level transparency
              </li>
              <li className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Confidence-based detection
              </li>
              <li className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Actionable health insights
              </li>
              <li className="flex gap-2 items-start">
                <span className="material-symbols-outlined text-green-600">
                  check_circle
                </span>
                Recipe mutation for improvement
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 border-t border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          Who is NutriLens for?
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Health-conscious individuals",
              desc: "Understand what you eat and make smarter food choices.",
            },
            {
              title: "Fitness & diet planning",
              desc: "Analyze macros and improve meals without manual tracking.",
            },
            {
              title: "Food-tech & research",
              desc: "Build transparent food intelligence systems using AI.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 border-t border-slate-200 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          Start exploring your food with AI
        </h2>
        <p className="mt-3 text-slate-600">
          Upload an image and see what NutriLens discovers.
        </p>

        <div className="mt-8">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet"/>

          <Link
            href="/scan"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-10 py-3
                       text-white font-medium shadow-sm hover:bg-green-500 transition"
          >
            <span className="material-symbols-outlined">
              arrow_forward
            </span>
            Get started
          </Link>
        </div>
      </section>
    </div>
  );
}
