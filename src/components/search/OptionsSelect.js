import { useEffect, useState } from "react";

const OptionsSelect = ({ selectType }) => {
  const filterOptions = require("../../utilities/filterOptions/filterOptions.json");

  // Import filter variable and setter here...

  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");

  useEffect(() => console.log("Price", price), [price]);

  const renderPriceOptions = () => {
    return (
      <>
        <select onChange={(e) => setPrice(e.target.value)}>
          <option value="">Välj ett pris</option>
          {filterOptions.priceOptions.map((num, i) => (
            <option key={i} value={num}>
              {num} kr
            </option>
          ))}
        </select>
      </>
    );
  };

  const renderGenreOptions = () => {
    return (
      <>
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="">Välj en genre</option>
          {filterOptions.movieGenres.map((genre, i) => (
            <option key={i} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </>
    );
  };

  const renderLanguageOptions = () => {
    return (
      <>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Välj ett språk</option>
          {filterOptions.movieLanguages.map((lang, i) => (
            <option key={i} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </>
    );
  }
  return selectType === "price" ? (
    renderPriceOptions()
  ) : selectType === "genre" ? (
    renderGenreOptions()
  ) : (
    renderLanguageOptions()
  );
};

export default OptionsSelect;
