"use client";

import { useRouter } from "next/navigation";

export default function DetailLink() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        //router.prefetch('/detail/')미리 로드
        router.prefetch("/detail/");
      }}
    >
      버튼
    </button>
  );
}
