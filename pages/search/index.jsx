"use client";

import MainLayout from "@/layouts/MainLayout";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

function Search() {
  const [searches, setSearches] = React.useState([]);

  return (
    <MainLayout>
      <div className="px-4 pt-8">
        <label className="flex gap-2 items-center relative w-full h-11 bg-white rounded-[10px] mb-4">
          <figure className="w-4 h-4 absolute left-4">
            <RiSearchLine className="h-full w-full text-[#A7A7A7]" />
          </figure>
          <input
            className="h-full w-full pl-11"
            type="text"
            placeholder="Search for a dish"
          />
        </label>
        <p className="text-dark font-normal mb-4">Recent searches</p>
        {searches[0] ? (
          <ul className="flex flex-col gap-[10px]">
            {searches.map((search, index) => (
              <li key={index}>
                <p>{search.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#A7A7A7] font-light text-sm">
            No recent searches
          </p>
        )}
      </div>
    </MainLayout>
  );
}

export default Search;
