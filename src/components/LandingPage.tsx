import * as React from "react";
import LandingPageBanner from "./LandingPageBanner";
import FeaturedCar from "./FeaturedCars";
import ViewAll from "./ViewAll";
import axios from "axios";
import {Link} from 'react-router-dom';

const baseURL = "https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars";
const config = {
  auth: {
    username: "Hasher",
    password: "L#(qc{f}TaJu4%4k",
  },
};

function LandingPage() {
  /* GET request for featured cars data */

  //Populate allCars with all the data from the GET
  const [allCars, setData] = React.useState<any[]>([]);

  // API request will only happen once
  React.useEffect(() => {
    axios.get(baseURL, config).then((response) => {
      setData(response.data);
    });
  }, []);

  console.log("ALL CARS API DATA", allCars);

  return (
    <div>
      <div className="featured-section">
        <LandingPageBanner />

        <div className="featured-header">
            <p style={{fontSize:'30px'}}>Featured <b>Cars</b></p>
            <div className="p-jl-u">
                <p>Popular</p>
                <p>Just Launched</p>
                <p>Upcoming</p>
                <Link to="/viewall">
                <p>View all</p>
                </Link>
                
            </div>
        </div>


        <FeaturedCar data={allCars.slice(0,4)} />
      </div>
    </div>
  );
}

export default LandingPage;
