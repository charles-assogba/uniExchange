import React from "react";
import Card from "./Card";

const ProductCard = () => {
  return (
    <div>
      <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Ready to declutter your closet?</h1>
      </div>

      {/* Grid Section - Starts Here */}
      <section
        id="Projects"
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
      {/*  Grid Section - End Here */}
      <div className="text-center mb-1">
        <a
          href="#"
          className="mr-5 inline-block rounded-full bg-primary px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white md:mr-6 lg:mr-8"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
