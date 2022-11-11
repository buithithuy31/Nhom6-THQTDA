import React from "react";
import { BsCheckCircle } from "react-icons/bs";
// import '../sass/components/_orders.scss'

export default function Orders() {
  return (
    <div className="susscess">
      <div className="susscess__header">
        <p className="susscess__header--title active">PAY</p>
      </div>
      <div className="content">
        <BsCheckCircle className="content__img" />
        <p className="content__title">Submitted successfully</p>
        <div className="content__des">
          <p>
            Thank you for submitting the information, we will contact and
            confirm the information
          </p>
        </div>
      </div>
    </div>
  );
}
