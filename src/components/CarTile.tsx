import * as React from "react";
import "../App.css";

type carInfo = {
  image: any;
  name: string;
  price: number;
};

function CarTile(carInfo: carInfo) {
  return(
  <div className="car-tile">
      <img className="car-image" src={carInfo.image}/>
      <p className="car-name"> {carInfo.name} </p>
      <p className="car-price"> {carInfo.price}</p>
  </div>
  );
}

export default CarTile;
