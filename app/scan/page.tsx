"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  function handleScan() {
    router.push("/ingredients");
  }

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Scan Your Food
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          setImage(e.target.files?.[0] || null)
        }
      />

      {image && (
        <img
          src={URL.createObjectURL(image)}
          className="mt-4 rounded"
        />
      )}

      <button
        onClick={handleScan}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Scan Food
      </button>
    </div>
  );
}
