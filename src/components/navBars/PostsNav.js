import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo2 from "../../img/logo2.png";
import Line from "../../img/line.png";
import { IoIosArrowBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";
import { DataContext } from "../../DataContext";
import Search from "../../img/Search.png";
import { useState } from "react";

const PostsNav = () => {
  const [data, setData] = useContext(DataContext);
  const [searchValue, setSearchValue] = useState("");

  //extract query from url
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  //handles bookmark of board
  const handleBookmark = () => {
    const updatedData = [...data];
    const selectedItem = updatedData[query];
    selectedItem.isBookmarked = !selectedItem.isBookmarked;
    setData(updatedData);
  };

  return (
    <nav
      className="navbar  navbar-light"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* back button */}
      <div
        className=""
        style={{
          marginLeft: "2%",
          marginRight: "30px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div style={{ display: "flex" }}>
          <Link to="/">
            <IoIosArrowBack
              style={{ color: "#717171", fontSize: "30px", paddingTop: "10px" }}
            />
            <img
              src={Logo2}
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Link>
          <h5
            style={{
              fontFamily: "Arial, Sans-serif",
              fontWeight: "700",
              fontSize: "20px",
              fontWeight: "bolder",
              color: "#717171",
              marginTop: "8px",
              marginLeft: "10px",
            }}
          >
            {data[query].name}
          </h5>
        </div>
        {/* bookmark and search icon */}
        <div style={{ paddingTop: "10px", display: "flex" }}>
          <CiSearch
            style={{ color: "#717171", fontSize: "30px", padding: "2px" }}
          />
          <img
            src={Line}
            style={{
              paddingLeft: "17px",
              paddingRight: "5px",
              paddingTop: "4px",
            }}
            height="27"
            className="d-inline-block align-top"
            alt="line"
          />
          <button style={{ border: "0px", backgroundColor: "#FFFFFF" }}>
            <BsBookmark
              style={{
                color: "#717171",
                fontSize: "30px",
                padding: "4px",
                color: data[query].isBookmarked ? "#F2BE22" : "#000000",
                marginBottom: "5px",
              }}
              onClick={handleBookmark}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PostsNav;
