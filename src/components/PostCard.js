import { BsBookmark } from "react-icons/bs";
import { RxDotsVertical } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import PostModal from "./modals/PostModal";

const PostCard = ({
  id,
  subject,
  image,
  date,
  comment,
  isBookmarked,
  isLiked,
  query,
}) => {
  const [data, setData] = useContext(DataContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  //if three dots are clicked
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  //if edit button clicked
  const handleEdit = () => {
    setModalVisible(true);
  };

  //if delete butoon clicked
  const handleDelete = () => {
    const updatedData = [...data];
    const parentItem = updatedData[query];
    parentItem.posts = parentItem.posts.filter((post) => post.id !== id);
    setData(updatedData);
    setShowDropdown(false);
  };

  //handles bookmark of post
  const handleBookmark = () => {
    const updatedData = [...data];
    const parentItem = updatedData[query];
    const postIndex = parentItem.posts.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
      const updatedPosts = [...parentItem.posts];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        isBookmarked: !updatedPosts[postIndex].isBookmarked,
      };
      parentItem.posts = updatedPosts;
      setData(updatedData);
    }
  };

  //handles like of post
  const handleLike = () => {
    const updatedData = [...data];
    const parentItem = updatedData[query];
    const postIndex = parentItem.posts.findIndex((post) => post.id === id);

    if (postIndex !== -1) {
      const updatedPosts = [...parentItem.posts];
      updatedPosts[postIndex] = {
        ...updatedPosts[postIndex],
        isLiked: !updatedPosts[postIndex].isLiked,
      };
      parentItem.posts = updatedPosts;
      setData(updatedData);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        setData={setData}
        query={query}
        operation={"update"}
        subject={subject}
        comment={comment}
        image={image}
        id={id}
      />
      {/* dropdown of three dots */}
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
      <div
        style={{
          display: "flex",
          width: "275px",
          height: "583px",
          backgroundColor: "#FFFFFF",
          flexDirection: "column",
          marginBottom: "30px",
          borderRadius: "8px",
          justifyContent: "space-between",
        }}
      >
        {/* header of card */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "16px",
              paddingTop: "16px",
            }}
          >
            <h4
              style={{
                fontFamily: "Arial, Sans-serif",
                fontWeight: "700",
                fontSize: "20px",
                marginBottom: "0px",
              }}
            >
              {subject}
            </h4>
            <b3
              style={{
                fontFamily: "Arial, Sans-serif",
                fontWeight: "500",
                fontSize: "12px",
                color: "#B0B0B0",
                paddingTop: "2px",
                paddingBottom: "5px",
              }}
            >
              {date}
            </b3>
          </div>
          <div
            style={{
              display: "flex",
              paddingRight: "15.75px",
              paddingTop: "18.5px",
            }}
          >
            <BsBookmark
              style={{
                paddingRight: "2.5px",
                fontSize: "20px",
                fill: isBookmarked ? "#F2BE22" : "#000000",
                cursor: "pointer",
              }}
              onClick={handleBookmark}
            />
            <RxDotsVertical
              style={{
                paddingLeft: "2.5px",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={handleDropdownToggle}
            />
          </div>
        </div>
        {/* image of card */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={image}
            height="162px"
            width="243px"
            className="d-inline-block align-top"
            alt="img"
          />
        </div>
        {/* body of card */}
        <div
          style={{
            textAlign: "justify",
            paddingLeft: "16px",
            paddingRight: "15px",
          }}
        >
          <sub3
            style={{
              fontFamily: "Arial, Sans-serif",
              fontWeight: "500",
              fontSize: "14px",
              color: "#2B2B2B",
            }}
          >
            {comment}
          </sub3>
        </div>
        {/* like of post */}
        <img
          src={require("../img/line2.png")}
          style={{
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingTop: "5px",
            height: "7.5px",
          }}
        />
        <div style={{ paddingLeft: "16px", marginBottom: "20px" }}>
          <AiOutlineHeart
            style={{
              fontSize: "20px",
              fill: isLiked ? "#F24C3D" : "#000000",
              cursor: "pointer",
            }}
            onClick={handleLike}
          />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
