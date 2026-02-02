const ingredients = [
  { name: "Paneer", confidence: 0.92 },
  { name: "Tomato", confidence: 0.88 },
  { name: "Onion", confidence: 0.85 },
];

export default function IngredientsPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Detected Ingredients
      </h2>

      <div className="flex flex-wrap gap-3">
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            className="px-4 py-2 bg-gray-100 rounded-full"
          >
            {ing.name}
            <span className="ml-2 text-sm text-gray-500">
              {Math.round(ing.confidence * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
