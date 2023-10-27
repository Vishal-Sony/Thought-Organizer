import React, { useState } from "react";
import Search from "../../img/Search.png";
import Logo from "../../img/logo.png";
import UnionLogo from "../../img/Union.png";
import { AiOutlinePlus } from "react-icons/ai";

const HomeNav = ({ setModalVisible, boards, setBoards }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [boardData, setBoardData] = useState(boards);

  // toggle of hamburger if size is small
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  //on change function of search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    console.log(value.length);
    // filters the boards visible
    if(value.length){

      const filteredBoards = value
        ? boardData.filter((board) =>
            board.name.toLowerCase().includes(value.toLowerCase())
          )
        : boards;
        setBoards(filteredBoards);
    }
    else{
      setBoards(boardData);
    }

  };

  return (
    // logo
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#FFFFFF", borderBottom: "2px solid #EBEBEB" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" style={{ paddingLeft: "4%" }}>
          <img
            src={Logo}
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </a>
        <button
          className={`navbar-toggler ${isNavOpen ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-nav"
          aria-controls="navbar-nav"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`container collapse navbar-collapse ${
            isNavOpen ? "show" : ""
          }`}
          id="navbar-nav"
          style={{ transition: "height 0.4s ease" }}
        >
          {/* search bar */}
          <form
            className="nav-item d-flex "
            style={!isNavOpen ? { width: "400px", marginLeft: "50%" } : {}}
          >
            <div className="input-group">
              <span
                style={{ backgroundColor: "#FFFFFF" }}
                className="input-group-text"
              >
                <img
                  src={Search}
                  height="15"
                  className="d-inline-block align-top"
                  alt="Search"
                />
              </span>
              <input
                style={{ backgroundColor: "#FFFFFF" }}
                className="form-control"
                type="search"
                placeholder="Search.."
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </form>

          {/* create board button */}
          <button
            className={`nav-item btn ms-5`}
            style={{ backgroundColor: "#D33852", color: "white" }}
            onClick={() => setModalVisible(true)}
          >
            <AiOutlinePlus
              className="d-inline-block align-left me-1"
              style={{ paddingBottom: "3px", fontSize: "23px" }}
            />
            Create New Board
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNav;
