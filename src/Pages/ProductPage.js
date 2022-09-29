import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import BrandFilter from '../Components/BrandFilter';
import CategoryFilter from '../Components/CategoryFilter';
import { Nav } from 'react-bootstrap';

import getItems from '../utils/GetItems';


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

const Div = styled.div`
  flex: 1;
  display: flex;

  .aside {
    width: 300px;
    padding: 16px;

    .title {
      font-size: 18px;
      font-weight: 500;
    }
  }

  .main {
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;

    .top {
      display: flex;

      .title {
        font-size: 18px;
        font-weight: 500;
        margin-right: auto;
      }
    }

    .clothes {
      margin: 16px 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
  }

  @media (max-width: 1024px) {
    .main {
      .clothes {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  @media (max-width: 768px) {
    .main {
      .clothes {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media (max-width: 640px) {
    .main {
      .top {
        align-items: center;

        .sort-filter {
          display: flex;
        }
      }

      .clothes {
        margin-bottom: 0;
      }
    }
  }
`;

const Products = ({ clothes, brands, categories }) => {
  const [width, setWidth] = useState(window.innerWidth);




  return (
    <>

      <MainNav>
        {/* <Nav.Link href="/">###</Nav.Link> / <span>###</span> */}
        <span>Collections</span>
      </MainNav>
      <Div>
        {width > 640 && (
          <aside className="aside">
            <div className="title">Filters</div>
            
          </aside>
        )}
        <main className="main">
          <div className="top">
            <div className="title">Collections</div>
            
          </div>
          
            <div className="clothes">
              
            </div>

        </main>
      </Div>
    </>
  );
};

export const getStaticProps = (context) => {
  const items = getItems();

  const brands = items.reduce((previous, current) => {
    if (!previous.includes(current.brand)) {
      previous.push(current.brand);
    }

    return previous;
  }, []);

  const categories = items.reduce((previous, current) => {
    if (!previous.includes(current.category)) {
      previous.push(current.category);
    }

    return previous;
  }, []);

  return {
    props: {
      clothes: items,
      brands,
      categories,
    },
  };
};

export default Products;
