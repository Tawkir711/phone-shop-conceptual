import React from 'react';
import Banner from '../../Components/Header/Banner/Banner';
import Phones from '../../Components/Phones/Phones';
import { useLoaderData } from 'react-router-dom';
import useGetPhones from '../../hook/useGetPhones';

const Home = () => {


  // const phones = useLoaderData();
  
  // 12/13 number line hook diye use korci
    const [phones] = useGetPhones()
    console.log(phones);

  return (
    <div>
      <Banner></Banner>
      <Phones phones={phones}></Phones>
    </div>
  );
};

export default Home;