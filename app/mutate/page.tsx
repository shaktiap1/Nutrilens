export default function MutatePage() {
  return (
    <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="border p-4 rounded">
        <h3 className="font-bold">
          Original Recipe
        </h3>
        <p>Calories: 420</p>
        <p>Fat: High</p>
      </div>

      <div className="border p-4 rounded bg-green-50">
        <h3 className="font-bold">
          Mutated Recipe
        </h3>
        <p>Calories: 310</p>
        <p className="text-green-700">
          Fat: Reduced
        </p>
      </div>
    </div>
  );
}
