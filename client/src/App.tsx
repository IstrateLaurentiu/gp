import { AppContextProvider } from "./context/AppContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/Routing/PrivateRoute";
import { Register } from "./components/Auth/Register";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { Login } from "./components/Auth/Login";
import { Container } from "react-bootstrap";
import { Navbar } from "./components/layout/navbar/Navbar";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
