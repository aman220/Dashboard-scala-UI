import { useContext, useEffect, useRef , useState} from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [activeLink, setActiveLink] = useState("/");

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">tabernam.</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/"  className={`menu-link ${activeLink === "/" ? "active" : ""}`}
                onClick={() => setActiveLink("/")}>
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/expenses"  className={`menu-link ${activeLink === "/expenses" ? "active" : ""}`}
                onClick={() => setActiveLink("/expenses")}>
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">All Expenses</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/savings" className={`menu-link ${activeLink === "/savings" ? "active" : ""}`}
                onClick={() => setActiveLink("/savings")}>
                <span className="menu-link-icon">
                  <MdOutlineAttachMoney size={20} />
                </span>
                <span className="menu-link-text">Savings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/generate" className={`menu-link ${activeLink === "/generate" ? "active" : ""}`}
                onClick={() => setActiveLink("/generate")}>
                <span className="menu-link-icon">
                  <MdOutlineCurrencyExchange size={18} />
                </span>
                <span className="menu-link-text">AI Suggestion</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/dailytracking" className={`menu-link ${activeLink === "/dailytracking" ? "active" : ""}`}
                onClick={() => setActiveLink("/dailytracking")}>
                <span className="menu-link-icon">
                  <MdOutlineShoppingBag size={20} />
                </span>
                <span className="menu-link-text">Daily Tracking</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
