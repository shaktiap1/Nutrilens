import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="text-xl font-bold text-green-600">
        NutriLens AI
      </h1>

      <div className="flex gap-4">
        <Link href="/scan">Scan</Link>
        <Link href="/ingredients">Ingredients</Link>
        <Link href="/recipes">Recipes</Link>
        <Link href="/chat">Chat</Link>
      </div>
    </nav>
  );
}
