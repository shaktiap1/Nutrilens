export default function NutritionPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        Nutrition Intelligence
      </h2>

      <div className="space-y-3">
        <div className="p-4 border rounded">
          Calories: 420 kcal
        </div>
        <div className="p-4 border rounded">
          Protein: 22 g
        </div>
        <div className="p-4 border rounded">
          Fat: 24 g
        </div>
      </div>

      <div className="mt-6">
        <p className="font-semibold">Health Score</p>
        <div className="w-full bg-gray-200 rounded h-4">
          <div className="bg-green-500 h-4 rounded w-[72%]" />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          72 / 100
        </p>
      </div>
    </div>
  );
}
