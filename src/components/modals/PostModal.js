import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { LuImage } from "react-icons/lu";
import { TiTick } from "react-icons/ti";

const PostModal = ({
  modalVisible,
  setModalVisible,
  data,
  setData,
  query,
  operation,
  subject,
  comment,
  image,
  id,
}) => {
  const [postComment, setPostComment] = useState(comment);
  const [postSubject, setPostSubject] = useState(subject);
  const [postImage, setPostImage] = useState(image);

  //function to generate date in dd'th mm format
  const today = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const formattedDay =
      day +
      (day > 3 && day < 21
        ? "th"
        : day % 10 === 1
        ? "st"
        : day % 10 === 2
        ? "nd"
        : day % 10 === 3
        ? "rd"
        : "th");
    const monthName = monthNames[monthIndex];
    const formattedDate = `${formattedDay} ${monthName}`;
    return formattedDate;
  };

  //sumbition of post form
  const submitData = (event) => {
    event.preventDefault();
    //if adding a new post
    if (operation === "add") {
      const newItem = {
        id: `p${data[query].posts.length + 1}`,
        subject: { postSubject }.postSubject,
        date: today(),
        image: { postImage }.postImage,
        comment: { postComment }.postComment,
      };

      setData((prevData) => {
        const updatedData = [...prevData];
        const parentElement = { ...updatedData[query] };
        parentElement.posts = [...parentElement.posts, newItem];
        updatedData[query] = parentElement;
        return updatedData;
      });
    }
    //if editing a post
    else {
      const updatedData = data.map((item, index) => {
        if (index == query) {
          const updatedPosts = item.posts.map((post) => {
            if (post.id == id) {
              return {
                ...post,
                subject: { postSubject }.postSubject,
                comment: { postComment }.postComment,
                image: { postImage }.postImage,
              };
            }
            return post;
          });

          return {
            ...item,
            posts: updatedPosts,
          };
        }
        return item;
      });

      setData(updatedData);
    }
    //setting states back to empty
    setPostComment("");
    setPostSubject("");
    setPostImage(null);
    setModalVisible(false);
  };

  //on change function of subject form
  const subjectChange = (event) => {
    setPostSubject(event.target.value);
  };
  //on change function of comment form
  const commentChange = (event) => {
    setPostComment(event.target.value);
  };
  //on change function of image form
  const imageChange = (event) => {
    const file = event.target.files[0];
    setPostImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <Modal
        show={modalVisible}
        onHide={() => {
          setModalVisible(false);
        }}
        centered
      >
        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "50px",
              paddingLeft: "3px",
              paddingTop: "10px",
            }}
          >
            {/* heading of modal */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h4
                style={{
                  fontFamily: "Arial, Sans-serif",
                  fontWeight: "700",
                  fontSize: "20px",
                }}
              >
                Create a post
              </h4>
              <sub
                style={{
                  fontFamily: "Arial, Sans-serif",
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#2B2B2B",
                }}
              >
                Write something for your post
              </sub>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setModalVisible(false);
              }}
            ></button>
          </div>

          {/* forms of modal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "50px",
            }}
          >
            <sub
              style={{
                fontFamily: "Arial, Sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                paddingLeft: "3px",
                color: "#393939",
              }}
            >
              Subject
            </sub>
            <input
              placeholder="Type name"
              type="text"
              id="place"
              className="form-control-md form-control mt-4 mb-4"
              name="place"
              value={postSubject}
              onChange={subjectChange}
            />
            <input
              type="file"
              id="postImage"
              name="postImage"
              hidden
              onChange={imageChange}
              accept="image/png, image/jpeg"
            />
            <label
              htmlFor="postImage"
              style={{
                borderRadius: "4px",
                height: "37px",
                width: "170px",
                border: "2px solid #DBDBDB",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <LuImage
                style={{
                  fontSize: "20px",
                  color: postImage === null ? "#717171" : "#22A699",
                }}
              />
              <sub
                style={{
                  fontFamily: "Arial, Sans-serif",
                  fontWeight: "600",
                  fontSize: "14px",
                  paddingBottom: "6px",
                  color: postImage === null ? "#717171" : "#22A699",
                }}
              >
                Add your image
              </sub>
              {postImage === null ? (
                <></>
              ) : (
                <TiTick style={{ color: "#22A699" }} />
              )}
            </label>
          </div>
          <img
            src={require("../../img/line3.png")}
            style={{ height: "1.7px", width: "463px" }}
            className="d-inline-block align-top"
            alt="line"
          />
          <div>
            <sub
              style={{
                fontFamily: "Arial, Sans-serif",
                fontWeight: "600",
                fontSize: "16px",
                paddingLeft: "3px",
                color: "#222222",
              }}
            >
              What’s on your mind?
            </sub>
            <textarea
              placeholder="Type here"
              className="form-control mt-4"
              id="textArea"
              rows="3"
              value={postComment}
              onChange={commentChange}
            />
          </div>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              className="btn"
              style={{ backgroundColor: "#D33852", color: "white" }}
              onClick={submitData}
            >
              Publish
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostModal;
