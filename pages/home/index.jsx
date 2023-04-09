import React from "react";
import { categories } from "./data";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import Promo1 from "/public/main/promo-1.png";
import Promo2 from "/public/main/promo-2.png";
import RestaurantsList from "../components/restaurantList/RestaurantList";
import MainLayout from "@/layouts/MainLayout";

function Home() {
  return (
    <main className="pt-11 px-4">
      <MainLayout>
        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <figure className="h-full">
              <TfiLocationPin className="text-[#FFE031] text-4xl" />
            </figure>
            <div>
              <h2 className="text-[#FFE031] text-xs uppercase">Deliver To</h2>
              <address className="text-dark not-italic font-normal text-sm">
                882 Well St, New-York
              </address>
            </div>
          </div>
          <aside className="flex gap-4">
            <Image src={Promo1} alt="Prom 1" />
            <Image src={Promo2} alt="Prom 2" />
          </aside>
          <p className="text-sm font-light">Restaurants and cafes</p>
          <div className="flex gap-3">
            {categories.map((category) => (
              <div
                className="flex items-center gap-4 py-3 px-4 rounded-md bg-white"
                key={category.id}
              >
                <Image
                  width={20}
                  height={20}
                  alt="Category icon"
                  src={category?.icon}
                />
                <h3 className="text-xs text-[#6c6c6c]">{category.name}</h3>
              </div>
            ))}
          </div>
        </header>
        <RestaurantsList />
      </MainLayout>
    </main>
  );
}

export default Home;
