import MultiRangeSlider from "./MultiRangeSlider";

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
    <div className="mx-2 pt-2 pb-5">
      <MultiRangeSlider min={minMaxLength.minLength} max={minMaxLength.maxLength} />
    </div>
  );
}

export default LengthOptions;