/*
## Alternativ för user input i filterval
Pris: Range, options (väljer intervall)
Längd på film: Range
Genre: Select/options
Datum: Input type=”date”
Skådespelare: Select/options; input type=”text”
Regissör: Select/options, input type=”text”
Språk: Select/options
Åldersgräns: Checkbox

*/

import filteralts from "../utilities/filterOptions/filterOptions.json";

const Filters = () => {
  return (
    <div className="p-2">
      <h2>Filter</h2>
      <p>Pris</p>
      <label>Min</label>
      <input type="range" />
      <br></br>
      <label>Max</label>
      <input type="range" />
      <p>Längd</p>
      <label>Min</label>
      <input type="range" />
      <br></br>
      <label>Max</label>
      <input type="range" />
      <p>Genre</p>
      <select></select>
      <p>Datum</p>
      <input type="date" />
      <p>Skådespelare</p>
      <input type="text" />
      <p>Regissör</p>
      <input type="text" />
      <p>Språk</p>
      <select></select>
      <p>Åldersgräns</p>
      <input type="checkbox" />
    </div>
  );
}

export default Filters;