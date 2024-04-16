import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import ExpensesScreen from "./screens/dashboard/ExpensesScreen";
import Generate from "./screens/dashboard/Generate";
import SavingScreen from "./screens/dashboard/SavingScreen";
import LoginPage from "./Auth/login";
import SignupPage from "./Auth/signup";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  // Conditionally render BaseLayout based on the route
  const shouldRenderBaseLayout = window.location.pathname !== "/login";

  return (
    <>
      <Router>
        <Routes>
          {shouldRenderBaseLayout &&(
            <Route element={<BaseLayout />}>
              <Route path='/' element={<Dashboard />} />
              <Route path="/expenses" element={<ExpensesScreen/>} />
              <Route path="/generate" element={<Generate/>} />
              <Route path="/savings" element={<SavingScreen/>} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          )}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
            alt="Theme toggle"
          />
        </button>
      </Router>
    </>
  );
}

export default App;
