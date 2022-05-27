import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  token: JSON.parse(localStorage.getItem("token"))||null,
  id: JSON.parse(localStorage.getItem("id"))||null,
  name: null
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
        id: null,
        name: null,
      };
    case "LOGIN_SUCCESS":
      return {
        token: action.token,
        id: action.id,
        name: action.name,
      };
    case "LOGIN_FAILURE":
      return {
        token: null,
        id: null,
        name: null,
      };
    case "LOGOUT":
      return {
        token: null,
        id: null,
        name: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(state.token));
  }, [state.token]);
  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(state.id));
  }, [state.id]);
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(state.name));
  }, [state.name]);
  return (
    <AuthContext.Provider
      value={{
        CUSTOMER_TOKEN: state.token,
        CUSTOMER_ID: state.id,
        CUSTOMER_NAME: state.name,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
