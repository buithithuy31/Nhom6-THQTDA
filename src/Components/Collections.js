import React from "react";
import Select from "react-select";
import Link from "next/link";
import { Container } from "react-bootstrap";
import './Collections.css'

const options = [
  { value: "default", label: "Default" },
  { value: "high", label: "Price: High to low" },
  { value: "low", label: "Price: Low to high" },
];

const Product = ({ id, brand, amount, name, imageURL, setPriority }) => {
  return (
    <div className="product">
    <Link href={`/product/${id}`}>
      <Container>
      <div className="group border-2 border-zinc-100 hover:shadow-neutral-300 hover:shadow-lg hover:cursor-pointer ">
        <div className="max-w-[300px] h-[350px] overflow-hidden">
          <img
            src={imageURL}
            width={220}
            height={275}
            layout="responsive"
            priority={setPriority}  />
        </div>
        <div className="info">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
          <div className="amount">Price: {amount}$</div>
        </div>
      </div>
      </Container>
    </Link>
    </div>
  );
};
const Collections = ({ productsFilter, sortProducts }) => {
  return (
    <div className="main">
      <div className="top">
        {/* <h2 className="title">Collections</h2> */}
        <Select
          className="Sortby"
          options={options}
          onChange={(e) => sortProducts(e.value)}
        />
      </div>
      {/* <div className="flex flex-row flex-wrap gap-5 mt-5 justify-around">
       */} <div className='flex flex-row mx-0 flex-wrap gap-5 mt-5 justify-around'>
        {productsFilter.map((product, index) => (
          <Product {...product} key={index.id} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
