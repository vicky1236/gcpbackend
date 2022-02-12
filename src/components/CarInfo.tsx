import * as React from 'react';


import "../App.css";
import CarTile from "./CarTile";
import axios from "axios";


// const baseURL = "https://hu-22-react-mockapi-urtjok3rza-wl.a.run.app/cars";
// const config = {
//   auth: {
//     username: "Hasher",
//     password: "L#(qc{f}TaJu4%4k",
//   },
// };

function CarInfo() {
//   /* GET request for featured cars data */

//   //Populate allCars with all the data from the GET
//   const [allCars, setData] = React.useState<any[]>([]);

//   // API request will only happen once
//   React.useEffect(() => {
//     axios.get(baseURL, config).then((response) => {
//       setData(response.data);
//     });
//   }, []);

  return (
    <div className='car-info'>
        Hello from Car Info Comp
    </div>
  );
}

export default CarInfo;