"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MealSearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParams = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParams}`;
    router.push(url);
  }, [search]);

  return (
    <div>
      <input
        className="text-black bg-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearchInput;
