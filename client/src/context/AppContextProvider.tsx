import React, { useCallback, useEffect, useMemo, useState } from "react";
import { http } from "../services/http";
import AppContext from "./AppContext";

type StateProps = {
  children: React.ReactNode;
};
export const AppContextProvider = ({ children }: StateProps) => {
  const [state, setState] = useState({
    user: undefined,
    loading: true,
  });

  const setUser = useCallback((user) => {
    setState({
      ...state,
      user,
      loading: false,
    });
  }, []);

  useEffect(() => {
    if (!localStorage.token) {
      setState({ ...state, loading: false });
      return;
    }
    console.log("here");
    http.get("/api/auth").then((res) => {
      console.log("user", res.data);
      setState({ ...state, loading: false, user: res.data });
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      ...state,
      setUser,
    }),
    [state, setUser]
  );

  return (
    <>
      {state.loading ? (
        <div>Loading...</div>
      ) : (
        <AppContext.Provider value={contextValue}>
          {children}
        </AppContext.Provider>
      )}
    </>
  );
};
