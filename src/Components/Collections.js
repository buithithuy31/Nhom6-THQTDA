import React from "react";
import Select from "react-select";
import Link from "next/link";
import { Nav, NavLink } from "react-bootstrap";

const options = [
  { value: "default", label: "Default" },
  { value: "high", label: "Price: High to low" },
  { value: "low", label: "Price: Low to high" },
];

const Product = ({ id, brand, amount, name, imageURL, setPriority }) => {
  return (
    <Nav.Link as={NavLink} href={`/product/${id}`}>
      <div className="grid justify-items-stretch">
        <div className="max-w-[300px] h-[350px] overflow-hidden">
          <img
            src={imageURL}
            width={220}
            height={275}
            layout="responsive"
            priority={setPriority}
            className="group-hover:scale-105 transition object-cover"
          />
        </div>
        <div className="p-3">
          <h4 className="text-lg font-medium">{brand}</h4>
          <p className="text-neutral-400 mt-2">{name}</p>
          <p className="text-lg font-medium mt-2">Price: {amount}$</p>
        </div>
      </div>
    </Nav.Link>
  );
};
const Collections = ({ productsFilter, sortProducts }) => {
  return (
    <div className="p-5 ml-10 mr-10 w-full">
      <div className="flex justify-between">
        <h2 className="text-2xl">Collections</h2>
        <Select
          className="w-56"
          options={options}
          onChange={(e) => sortProducts(e.value)}
        />
      </div>
      <div className="flex flex-row flex-wrap gap-5 mt-5 justify-around">
        {productsFilter.map((product, index) => (
          <Product {...product} key={index.id} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
