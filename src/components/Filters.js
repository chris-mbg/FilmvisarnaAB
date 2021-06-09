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

const Filters = () => {

  const filterOptions = require("../utilities/filterOptions/filterOptions.json");

  return (
    <div className="p-2">
      <h2>Filter</h2>
      <p>Pris</p>
      <select>
        <option value="">Pris</option>
          {filterOptions.priceOptions.map((num, i) => (
            <option key={i} value={num}>{num} kr</option>
          ))}
        </select>
      <p>Längd</p>
      <label>Min</label>
      <input type="range" />
      <br></br>
      <label>Max</label>
      <input type="range" />
      <p>Genre</p>
        <select>
          <option value="">Välj en genre</option>
          {filterOptions.movieGenres.map((genre, i) => (
            <option key={i} value={genre}>{genre}</option>
          ))}
        </select>
      <p>Datum</p>
      <input type="date" />
      <p>Skådespelare</p>
      <input type="text" />
      <p>Regissör</p>
      <input type="text" />
      <p>Språk</p>
      <select>
          <option>Hitta film efter språk</option>
          {filterOptions.movieLanguages.map((lang, i) => (
            <option key={i} value={lang}>{lang}</option>
          ))}
        </select>
      <p>Åldersgräns</p>
      {filterOptions.movieAgeLimits.map((limit, i) => (
        <div>
          <label for={limit}>{limit.slice()}</label>
          <input type="checkbox" value={limit} name={limit} />
        </div>
      ))}
    </div>
  );
}

export default Filters;