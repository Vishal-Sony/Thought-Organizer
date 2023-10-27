import React, { useState } from "react";
import { RxDotsVertical } from "react-icons/rx";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import BoardModal from "./modals/BoardModal";

const BoardItem = ({ color, name, data, setData, index }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // handlee three dots' dropdown
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // if edit button clicked
  const handleEdit = () => {
    setModalVisible(true);
  };

  // if delete button clicked

  const handleDelete = () => {
    const index = data.findIndex((item) => item.name === name);
    const updatedData = [...data.slice(0, index), ...data.slice(index + 1)];
    setData(updatedData);
    setShowDropdown(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          margin: "1%",
          display: "flex",
          width: "364px",
          height: "80px",
          borderRadius: "10px",
          border: "3px solid #F5F5F5",
        }}
      >
        <div
          style={{
            flexGrow: "1",
            backgroundColor: `${color}`,
            width: "40px",
            borderRadius: "10px 0 0 10px",
          }}
        />
        <div style={{ flexGrow: "5", textAlign: "center", paddingTop: "7%" }}>
          <Link to={`/posts?q=${index}`} style={{ textDecoration: "none" }}>
            <b2
              style={{
                fontFamily: "Arial, Sans-serif",
                fontWeight: "500",
                fontSize: "17px",
                color: "#222222",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "# 23856D";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#222222";
              }}
            >
              {name}
            </b2>
          </Link>
        </div>
        <div style={{ flexGrow: "1", textAlign: "center", paddingTop: "7%" }}>
          {/* the three dots */}
          <button
            style={{ border: "0px", backgroundColor: "#FFFFFF" }}
            onClick={handleDropdownToggle}
          >
            <RxDotsVertical style={{ alignSelf: "center", fontSize: "17px" }} />
          </button>
        </div>
      </div>
      {/* drop down of three dots */}
      {showDropdown && (
        <div
          style={{
            width: "150px",
            height: "50px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 2.5px 2.5px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-around",
            alignSelf: "flex-end",
          }}
        >
          <button
            style={{
              border: "0px",
              backgroundColor: "transparent",
              cursor: "pointer",
              padding: "5px",
              color: "#222222",
            }}
            onClick={handleEdit}
            onMouseEnter={(e) => {
              e.target.style.color = "#23856D";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#222222";
            }}
          >
            <BiEditAlt
              style={{
                paddingBottom: "3px",
                fontSize: "20px",
                paddingRight: "4px",
              }}
            />
            Edit
          </button>
          <img
            style={{ paddingTop: "10px" }}
            src={require("../img/line.png")}
            height="40px"
            width="1px"
            className="d-inline-block align-top"
            alt="img"
          />
          <button
            style={{
              border: "0px",
              backgroundColor: "transparent",
              cursor: "pointer",
              padding: "5px",
              color: "#222222",
            }}
            onClick={handleDelete}
            onMouseEnter={(e) => {
              e.target.style.color = "#D33852";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#222222";
            }}
          >
            <RiDeleteBinLine
              style={{
                paddingBottom: "3px",
                fontSize: "18px",
                paddingRight: "4px",
              }}
            />
            Delete
          </button>
        </div>
      )}

      <BoardModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={name}
        color={color}
        operation={"update"}
      />
    </div>
  );
};

export default BoardItem;
