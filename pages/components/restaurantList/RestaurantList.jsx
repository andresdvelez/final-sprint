"use client";

import Link from "next/link";
import React from "react";
import { useFetchRestaurants } from "@/hooks/useFetchRestaurants";

function RestaurantsList() {
  const { restaurants } = useFetchRestaurants();

  return (
    <ul className="flex flex-col gap-3 mt-8 ">
      {restaurants?.map((restaurant) => (
        <Link
          href={`/home/${restaurant?.id}`}
          key={restaurant?.id}
          className="flex items-center cursor-pointer hover:bg-slate-100 rounded-xl"
        >
          <img
            className="restaurantImg"
            src={restaurant?.img}
            alt={restaurant?.name}
          />
          <div className="ml-3 flex flex-col gap-[10px]">
            <div>
              <p className="text-sm text-dark">{restaurant?.name}</p>
              <div className="text-xs">⭐️ ⭐️ ⭐️ ⭐️ ★</div>
            </div>
            <div>
              <p className="text-sm font-light text-dark">
                Work time {restaurant?.workTime}
              </p>
              <p className="text-[10px] text-[#A7A7A7]">
                Before you{" "}
                <span className="text-dark">{restaurant?.cheapestPrice}$</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
}

export default RestaurantsList;
