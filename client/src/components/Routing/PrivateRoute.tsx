import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

type StateProps = {
  token?: string;
  redirectPath?: string;
  children: React.ReactNode;
};

export const ProtectedRoute = ({
  children,
  redirectPath = "/login",
}: StateProps) => {
  const { user, loading } = useContext(AppContext);

  console.log('user in protected route', user, loading)

  if (!user) {
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</> ;
};
