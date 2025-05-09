"use client";

import { useRouter } from "next/navigation";

export default function BackArrowBtn() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className="sticky  top-0 w-full h-10 z-50">
      <button
        onClick={goBack}
        className="absolute  top-1/2 right-4 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Go back"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="scale(-1, 1)" 
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
}