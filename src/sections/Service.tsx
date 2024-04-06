import React from "react";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Service = () => {
  return (
    <section className="max-conatiner flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard {...service} />
      ))}
    </section>
  );
};

export default Service;
