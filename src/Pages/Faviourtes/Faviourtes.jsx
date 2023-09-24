import React, { useEffect, useState } from 'react';
import PhoneCard from '../Phone/PhoneCard';
import FavoritesCard from './FavoritesCard';

const Faviourtes = () => {


  const [favorites, setFavorites] = useState([])
  const [noFound, setNoFound] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));

    if (favoriteItems) {   
      setFavorites(favoriteItems)

      const total = favoriteItems.reduce((prevalue, currentItem) => prevalue + currentItem.price, 0)
      setTotalPrice(total);

    }
    else {
      setNoFound('No Data Found!!')
    }
  }, [])
  console.log(favorites);

  const handleRemove = () => {
    localStorage.clear()
    setFavorites([])
    setNoFound("No Data Found!!");
  }


  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center font-semibold text-2xl">
          {noFound}
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <div>
              <button
                onClick={handleRemove}
                className="px-5 bg-green-300 block mx-auto"
              >
                Delete All Favorite
                </button>
                <h1>Total Price: {totalPrice} </h1>
            </div>
          )}
          <div className="grid grid-cols-2 gap-5">
            {isShow
              ? favorites.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : favorites
                  .slice(0, 4)
                  .map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))}
          </div>
          {favorites.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 bg-green-300 block mx-auto"
            >
              {isShow ? "See less" : "See more"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Faviourtes;