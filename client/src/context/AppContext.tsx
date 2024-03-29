import React from "react";
import { User } from "../types/Models";

interface IContext {
  user?: User;
  loading: boolean;
  setState?: any;
  setUser: (user?: User) => void;
}

const AppContext = React.createContext<IContext>({
  loading: true,
  setUser: () => {},
});

export default AppContext;
