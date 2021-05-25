import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Registration for new user.
  const register = async (userInformation) => {
    try {
      const response = await fetch(`/api/v1/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: userInformation.firstName,
          lastName: userInformation.lastName,
          phone: userInformation.phone,
          email: userInformation.email,
          password: userInformation.password,
        }),
      });

      // If registration was not successful, then throw new error.
      if (response.status !== 200) {
        throw new Error();
      } else {
        return true;
      }
    } catch (err) {
      return false;
    }
  };
  return (
    <UserContext.Provider
      value={{ loggedInUser, setLoggedInUser, register }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
