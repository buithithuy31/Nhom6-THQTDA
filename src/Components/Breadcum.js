import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';
const Breadcum = () => {

  const MainNav = styled.div`
  font-size: 14px;
  background-color: #f4f4f4;
  padding: 16px;
  text-align: center;

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
    color: #999;
  }
`;
  return (
    <MainNav>
    <span>Collections</span>
  </MainNav>
  );
};

export default Breadcum;
