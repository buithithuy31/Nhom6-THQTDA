import React, { useEffect, useState } from "react";
import Link from "next/link";
import Filters from "../Components/Filters";
import Collections from "../Components/Collections";
import { child, get, limitToLast, query, ref } from "firebase/database";
import { database } from "../firebase";
import Breadcum from "../Components/Breadcum";
import { useRouter } from "next/router";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [productsFilter, setProductFilter] = useState([]);
  useEffect(() => {
    get(query(child(ref(database), `clothes`), limitToLast(30)))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducts(snapshot.val());
          setProductFilter(snapshot.val());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleChangeProducts = (arrFilter) => {
    if (arrFilter.length === 0) {
      setProductFilter(products);
    } else {
      const arr = products.filter(
        (product) =>
          arrFilter.includes(product.brand) ||
          arrFilter.includes(product.category)
      );
      setProductFilter(arr);
    }
  };
  const sortProducts = (sort) => {
    let arrPrice = null;
    switch (sort) {
      case "low": {
        arrPrice = productsFilter.sort((a, b) => a.amount - b.amount);
        break;
      }
      case "high": {
        arrPrice = productsFilter.sort((a, b) => b.amount - a.amount);
        break;
      }
      default: {
        arrPrice = products;
      }
    }
    setProductFilter([...arrPrice]);
  };
  return (
    <div>
      <Breadcum />
      <div className="flex flex-row">
        <div className="title">Filters</div>
           <Filters changeProducts={handleChangeProducts} />
        <div className="title">Collections</div>
           <Collections {...{ productsFilter, sortProducts }} />
      </div>
      {/* <div>
        {width > 640 && (
          <aside className="aside">
            <div className="title">Filters</div>
            <Filters changeProducts={handleChangeProducts} />

          </aside>
        )}
        <main className="main">
          <div className="top">
            <div className="title">Collections</div>
            <Collections {...{ productsFilter, sortProducts }} />
          </div>

            <div className="clothes">

            </div>

        </main>
      </div> */}
    </div>
  );
};

export default ProductPage;
