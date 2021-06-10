const LengthOptions = () => {

  const filterOptions = require("../../utilities/filterOptions/filterOptions.json");

  const lengths = filterOptions.movieLengths.map((length) => {
    const whereToSlice = length.indexOf(" ");
    return length.slice(0, whereToSlice);
  });
  const minMaxLength = {
    minLength: Math.min(...lengths),
    maxLength: Math.max(...lengths),
  };

  return (
    <>
      <p>Längd på filmen</p>
        <label>Minimum: {minMaxLength.minLength} min</label>
        <input type="range" />
        <br></br>
        <label>Maximum: {minMaxLength.maxLength} min</label>
        <input type="range" />
    </>
  );
}

export default LengthOptions;