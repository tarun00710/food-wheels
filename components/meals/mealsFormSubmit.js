"use client";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus;
  return (
    <>
      <button
        type="submit"
        className="px-6 py-2 text-lg font-bold text-white rounded-md shadow-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] transition-all duration-300 hover:from-[#fd4715] hover:to-[#f9b241] disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={pending}
      >
        {pending ? "Submitting..." : "Share Meal"}
      </button>
    </>
  );
}
