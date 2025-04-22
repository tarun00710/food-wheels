"use client";

export default function Error() {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent uppercase">
       Oops, An Error Occurred while sharing meal!
      </h1>
      <p className="text-gray-300 mt-2">
        Failed to Share the Meals
      </p>
    </div>
  );
}
