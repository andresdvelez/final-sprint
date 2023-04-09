import Link from "next/link";
import React from "react";

function DishesList({ dishes, urlId }) {
  return (
    <ul className="w-full overflow-y-scroll mt-12 flex flex-wrap gap-x-4 gap-y-3">
      {dishes?.map((dish) => (
        <Link key={dish.id} href={`/home/${urlId}/${dish?.id}`}>
          <li className="rounded-xl p-2 dish flex flex-col gap-2 w-[170px] h-[180px]">
            <img
              className="rounded-xl w-full h-[110px] bg-cover object-cover"
              src={dish?.img}
              alt={dish.name}
            />
            <p className="text-sm text-dark">{dish.name}</p>
            <p className="text-[#A7A7A7]">{dish.price}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default DishesList;
