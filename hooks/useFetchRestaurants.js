import { db } from "@/firebase";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchRestaurants = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const q = query(collection(db, "restaurants"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let restaurantsArr = [];
          querySnapshot.forEach((doc) => {
            restaurantsArr.push({ ...doc.data(), id: doc.id });
          });
          setRestaurants(restaurantsArr);
        });
        return () => unsubscribe();
      } catch (error) {
        setError("Failed to load restaurants");
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurants();
  }, []);
  return { loading, error, restaurants };
};

export const useGetRestaurantById = (id) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function fetchRestaurant() {
      try {
        const itemRef = doc(db, "restaurants", id);
        const docSnap = await getDoc(itemRef);
        setRestaurant(docSnap.data());
      } catch (err) {
        setError("Failed to load restaurant");
      } finally {
        setLoading(false);
      }
    }
    fetchRestaurant();
  }, [id]);
  return { loading, error, restaurant };
};

export const getDish = (dishes, id) => {
  const dish = dishes?.find((dish) => dish.id === id);
  return dish;
};
