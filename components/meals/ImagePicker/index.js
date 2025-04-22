"use client";
import Image from "next/image";

import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [data, setData] = useState(null);
  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handlePickedImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setData(fileReader.result);
    };

    fileReader.readAsDataURL(file);
    setData(null);
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <div className="flex flex-col gap-4">
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          className="hidden"
          onChange={handlePickedImage}
        />
        <button
          type="button"
          onClick={handlePickClick}
          className="self-start px-6 py-2 bg-gray-400 rounded-md text-white font-medium hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Pick an Image
        </button>

        <div className="w-40 h-40 border-2 border-gray-400 flex justify-center items-center text-gray-400 relative">
          {!data && <p> No Image Selected</p>}
          {data && <Image src={data} alt="Food Image" fill />}
        </div>
      </div>
    </div>
  );
}
