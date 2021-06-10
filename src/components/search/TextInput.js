const TextInput = ({ inputType }) => {

  return (
    <>
      {inputType === "actor" ? (
        <>
          <input type="text" placeholder="Sök skådespelare..."/>
        </>
      ) : (
        <>
          <input type="text" placeholder="Sök regissör..." />
        </>
      )}
    </>
  );
};

export default TextInput;
