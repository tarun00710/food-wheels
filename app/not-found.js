

export default function NotFound() {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent uppercase">
       Not Found
      </h1>
      <p className="text-gray-300 mt-2">
       Unfortunately, we could not find the requested page or resource.
      </p>
    </div>
  );
}
