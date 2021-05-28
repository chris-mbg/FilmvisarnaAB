import { createContext, useEffect, useState } from "react";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {

  const values = {

  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;
