"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepIndicator from "../components/StepIndicator";

export default function ScanPage() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleScan() {
    if (!image) return;
    setLoading(true);

    // simulate AI processing
    setTimeout(() => {
      router.push("/ingredients");
    }, 1200);
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* PAGE HEADER */}
      <div className="pt-14 text-center">
        <h1 className="text-3xl font-semibold text-slate-900">
          Food Intelligence Scanner
        </h1>
        <p className="mt-2 text-slate-500 max-w-2xl mx-auto">
          Upload a food image to identify ingredients, estimate nutrition,
          and generate healthier recipe variations.
        </p>
      </div>

      {/* STEP FLOW */}
      <StepIndicator currentPath="/scan" />

      {/* CARD */}
      <div className="flex justify-center">
        <div
          className="relative w-full max-w-xl rounded-2xl bg-white p-8
                     border border-slate-200
                     shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
        >
          <h2 className="text-xl font-semibold text-slate-900 text-center">
            Scan your food
          </h2>
          <p className="text-center text-slate-500 mt-1">
            Upload a food image to analyze ingredients and nutrition
          </p>

          {/* UPLOAD BOX */}
          <div
            className="mt-8 rounded-xl border-2 border-dashed border-slate-300
                       bg-slate-50 p-8 text-center
                       hover:bg-green-50/50 hover:border-green-500
                       transition"
          >
            <input
              type="file"
              accept="image/*"
              id="food-upload"
              className="hidden"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
            />

            <label
              htmlFor="food-upload"
              className="cursor-pointer flex flex-col items-center gap-3"
            >
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600">
                  photo_camera
                </span>
              </div>

              <p className="text-slate-700 font-medium">
                Click to upload image
              </p>
              <p className="text-sm text-slate-500">
                JPG or PNG • Max 5MB
              </p>
            </label>
          </div>

          {/* HELPER TEXT */}
          <p className="mt-3 text-xs text-slate-400 text-center">
            Tip: Clear, well-lit food images give best results
          </p>

          {/* PREVIEW */}
          {image && (
            <div className="mt-6">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="max-h-60 mx-auto rounded-xl border border-slate-200 object-contain"
              />
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleScan}
            disabled={!image || loading}
            className="mt-8 w-full rounded-full py-3 font-medium text-white
                       bg-green-600 hover:bg-green-500 transition
                       shadow-sm
                       disabled:bg-slate-200 disabled:text-slate-500
                       disabled:cursor-not-allowed"
          >
            {loading ? "Analyzing…" : "Analyze food"}
          </button>
        </div>
      </div>
    </div>
  );
}
