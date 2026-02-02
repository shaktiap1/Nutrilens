import StepIndicator from "../components/StepIndicator";
<StepIndicator currentPath="/recipes" />

export default function RecipesPage() {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Generated Recipes
      </h2>

      <div className="border rounded p-4">
        <h3 className="font-semibold">
          Paneer Tomato Stir Fry
        </h3>
        <p className="text-sm text-gray-600">
          Calories: 420 kcal
        </p>

        <button className="mt-3 bg-blue-600 text-white px-3 py-1 rounded">
          Mutate Recipe
        </button>
      </div>
    </div>
  );
}
