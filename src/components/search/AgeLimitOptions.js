const AgeLimitOptions = () => {
  const filterOptions = require("../../utilities/filterOptions/filterOptions.json");

  return (
    <>
      {filterOptions.movieAgeLimits.map((limit, i) => (
           <div key={i}>
             <label for={limit}>{limit.slice()}</label>
             <input type="checkbox" value={limit} name={limit} />
           </div>
      ))}
    </>
  );
}

export default AgeLimitOptions;