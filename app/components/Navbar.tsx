import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/scan"
          className="text-lg font-semibold text-green-600"
        >
          NutriLens AI
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-sm text-slate-600">
          <Link
            href="/scan"
            className="hover:text-slate-900 transition"
          >
            Scan
          </Link>
          <Link
            href="/ingredients"
            className="hover:text-slate-900 transition"
          >
            Ingredients
          </Link>
          <Link
            href="/recipes"
            className="hover:text-slate-900 transition"
          >
            Recipes
          </Link>
          <Link
            href="/chat"
            className="hover:text-slate-900 transition"
          >
            Chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
