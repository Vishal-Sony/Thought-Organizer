import PostModal from "../modals/PostModal";
import { useState, useContext, useEffect } from "react";
import PostsNav from "../navBars/PostsNav";
import { AiOutlinePlus } from "react-icons/ai";
import NoItem from "../NoItem";
import PostCard from "../PostCard";
import { DataContext } from "../../DataContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Posts = () => {
  const [postsEmpty, setPostsEmpty] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useContext(DataContext);

  // extracting query from url
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q");

  //check if there are any posts
  useEffect(() => {
    if (!data[query].posts.length) setPostsEmpty(true);
    else setPostsEmpty(false);
  }, [data]);

  return (
    <div style={{ backgroundColor: data[query].color, minHeight: "100vh" }}>
      <PostsNav />
      {/* header of posts page */}
      <div style={{ paddingLeft: "5%", paddingTop: "2%", paddingRight: "5%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {postsEmpty && (
              <h2
                style={{ fontFamily: "Arial, Sans-serif", fontWeight: "700" }}
              >
                Your Posts
              </h2>
            )}
          </div>
          <button
            className={`nav-item btn ms-5`}
            style={{ backgroundColor: "#D33852", color: "white" }}
            onClick={() => {
              setModalVisible(true);
            }}
          >
            <AiOutlinePlus
              className="d-inline-block align-left me-1"
              style={{ paddingBottom: "3px", fontSize: "23px" }}
            />
            Create New Post
          </button>
        </div>
        {/* content of posts page */}
        <div>
          {postsEmpty ? (
            <NoItem />
          ) : (
            <DragDropContext>
              <Droppable droppableId="posts">
                {(provided) => (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      columnGap: "70px",
                      padding: "2%",
                    }}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {data[query].posts.map(
                      (
                        {
                          id,
                          subject,
                          date,
                          image,
                          comment,
                          isBookmarked,
                          isLiked,
                        },
                        index
                      ) => {
                        return (
                          // <Draggable key={id} draggableId={id} index={index}>
                          //   {(provided)=>(
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <PostCard
                              id={id}
                              subject={subject}
                              date={date}
                              image={image}
                              comment={comment}
                              isBookmarked={isBookmarked}
                              isLiked={isLiked}
                              query={query}
                            />
                          </div>
                          //     )}
                          // </Draggable>
                        );
                      }
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>
      </div>
      <PostModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        setData={setData}
        query={query}
        operation={"add"}
        subject={""}
        comment={""}
        image={null}
        id={""}
      />
    </div>
  );
};

export default Posts;
