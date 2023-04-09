import DishesList from "@/pages/components/dishesList/DishesList";
import { useGetRestaurantById } from "@/hooks/useFetchRestaurants";
import React from "react";
import { useRouter } from "next/router";

function Restaurant() {
  const router = useRouter();
  const { id } = router.query;

  const restaurant = useGetRestaurantById(id);

  const filters = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Salates",
    },
    {
      id: 3,
      label: "Pizza",
    },
    {
      id: 4,
      label: "Dessert",
    },
    {
      id: 5,
      label: "Drinks",
    },
  ];

  return (
    <section className="px-4 pt-9">
      <header>
        <div className="flex items-center mb-4">
          <img
            className="restaurantImg h-28 w-32"
            src={restaurant?.restaurant?.img}
            alt={restaurant?.restaurant?.name}
          />
          <div className="ml-5">
            <h2 className="text-dark text-sm mb-1">
              {restaurant?.restaurant?.name}
            </h2>
            <p className="font-light text-[10px]">
              {restaurant?.restaurant?.description}
            </p>
            <div className="flex justify-between mt-3">
              <span>{restaurant?.restaurant?.rating}</span>
              <span className="font-light bg-white rounded-[4px] text-[10px] p-1">
                15-20 min
              </span>
            </div>
          </div>
        </div>
        <ul className="flex gap-3">
          {filters.map((filter) => {
            return (
              <li
                className="flex items-center gap-4 cursor-pointer py-3 px-7 rounded-md bg-white"
                key={filter.id}
              >
                <button className="text-xs text-[#6c6c6c]">
                  {filter.label}
                </button>
              </li>
            );
          })}
        </ul>
      </header>
      <DishesList dishes={restaurant?.restaurant?.dishes} urlId={id} />
    </section>
  );
}

export default Restaurant;
