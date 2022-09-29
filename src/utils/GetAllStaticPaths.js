import data from '../Pages/api/data.json';

const GetAllStaticPaths = () => {
  return data.clothes.map((item) => ({
    params: { cid: item.id },
  }));
};

export default GetAllStaticPaths;