import * as React from "react";
import "../App.css";
import CarTile from "./CarTile";
import {Link} from 'react-router-dom';

type CarData = {
  data: any[];
};

function FeaturedCar(featuredCars: CarData) {
  return (
    <div className="featured-cars">
      {featuredCars.data.map((c) => (
          <Link to={`/info/${c.name}`}>
        <CarTile key={c.name} image={c.image} name={c.name} price={c.price} />
        </Link>
      ))}
    </div>
  );
}

export default FeaturedCar;
