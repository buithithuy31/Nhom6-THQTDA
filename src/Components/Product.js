import React, { useContext, useEffect, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { database } from "../firebase";
import Link from "next/link";
// import { CheckSignIn } from "../signin";
import { Store } from "../App";
// import { RadioGroup, RadioButton } from "react-radio-buttons";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Breadcum from "./Breadcum";



const Cid = ({ cid }) => {
  const [productDetail, setProductDetail] = useState(null);
  const router = useRouter();


  return (
    <>
      <Breadcum hasEndLink={productDetail?.brand + " " + productDetail?.name} />
     
    </>
  );
};

export default Cid;
