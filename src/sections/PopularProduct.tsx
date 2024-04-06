import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProduct = () => {
  return (
    <section id="product" className="max-contair max-sm:mt-12">
      <div className=" flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span>Product
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-noth quality and style with our sought-after
          selection.Discover a world of comfort, design and value
        </p>
        <p></p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-col3 md:grid-col-2 grid-1 sm:gap-6 gap-16">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
