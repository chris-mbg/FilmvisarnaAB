import { useEffect, useState } from "react";

const PriceOptions = () => {
  const filterOptions = require("../../utilities/filterOptions/filterOptions.json");

  // Import filter variable and setter here...

  const [price, setPrice] = useState("");

  useEffect(() => console.log("Price", price), [price]);

  return (

    <>
      <select onChange={(e)=> setPrice(e.target.value)}>
       <option value="">Väj ett pris</option>
       {filterOptions.priceOptions.map((num, i) => (
         <option key={i} value={num}>
           {num} kr
         </option>
       ))}
     </select>
    </>
  );
}

export default PriceOptions;