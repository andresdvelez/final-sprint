import React, { useEffect } from "react";
import { getDish, useGetRestaurantById } from "@/hooks/useFetchRestaurants";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setPrice,
  resetPrice,
  setIngredient,
  removeIngredient,
  addMultiplier,
  restMultiplier,
} from "@/slices/dishSlice";
import { addProduct } from "@/slices/carSlice";

function Dish() {
  const router = useRouter();
  const { id, dishId } = router.query;

  const { price, ingredients, multiplier } = useSelector((state) => state.dish);
  const dispatch = useDispatch();

  const restaurant = useGetRestaurantById(id);

  const dish = getDish(restaurant?.restaurant?.dishes, dishId);

  useEffect(() => {
    console.log(dish?.price);
    dispatch({ type: setPrice, payload: dish?.price });
  }, [dish?.price, multiplier]);

  const selectIngredient = (id, e) => {
    if (ingredients[Number(e.target.getAttribute("data-id"))].selected) {
      dispatch({ type: removeIngredient, payload: id });
    } else {
      dispatch({ type: setIngredient, payload: id });
    }
  };

  const handleAdd = () => {
    let selectedDish = {
      ...dish,
      finalPrice: price,
    };

    dispatch({ type: addProduct, payload: selectedDish });
  };

  const handleRestMultiplier = () => {
    if (multiplier === 1) {
      return;
    } else {
      dispatch(restMultiplier());
    }
  };

  return (
    <section className="flex flex-col h-screen">
      {dish && (
        <>
          <img className="borderBottom mb-4" src={dish?.img} alt={dish?.name} />
          <div className="px-4">
            <div className="flex justify-between mb-3">
              <h1 className="text-dark text-xl">{dish?.name}</h1>
              <p className="text-dark font-light text-[10px]">
                {dish?.deliveryTime}
              </p>
            </div>
            <p className="text-dark text-sm font-light mb-4">
              {dish?.description}
            </p>
            <div>
              <h3 className="text-sm text-[#A7A7A7] mb-2">
                Additional Ingredients
              </h3>
              <ul className="flex flex-col gap-2">
                {ingredients.map((ingredient) => {
                  return (
                    <li
                      onClick={(e) => selectIngredient(ingredient?.id, e)}
                      data-id={ingredient?.id}
                      key={ingredient.id}
                      className="flex justify-between cursor-pointer bg-white p-2 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-md p-1 flex items-center justify-center text-dark text-xs ${
                            ingredient.selected ? "bg-main-color" : "bg-white"
                          }`}
                        >
                          {ingredient.selected ? "✓" : ""}
                        </div>
                        <p className="text-dark font-light text-sm">
                          {ingredient.label}
                        </p>
                      </div>
                      <p
                        className={`${
                          ingredient.selected ? "text-[#FFE031]" : "text-dark"
                        }`}
                      >
                        +{ingredient.price}$
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
      <div className="flex gap-4 w-full justify-around h-full mb-8 items-end">
        <div className="bg-white h-11 rounded-xl flex items-center px-4 gap-8">
          <button className="text-dark text-xl" onClick={handleRestMultiplier}>
            -
          </button>
          <p className="text-dark text-xl">{multiplier}</p>
          <button
            className="text-dark text-xl"
            onClick={() => dispatch(addMultiplier())}
          >
            +
          </button>
        </div>
        <button
          className="bg-main-color rounded-xl h-11 flex items-center gap-20 px-4"
          onClick={handleAdd}
        >
          <p className="text-dark text-sm">Add</p>
          <p className="text-dark text-xl font-light">${price.toFixed(2)}</p>
        </button>
      </div>
    </section>
  );
}

export default Dish;
