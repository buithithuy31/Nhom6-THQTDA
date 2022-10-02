import data from '../Pages/api/data.json';

const GetByID = (itemId) => {
  return data.clothes.find((item) => item.id === itemId);
};

export default GetByID;