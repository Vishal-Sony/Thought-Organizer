import HomeNav from "../navBars/HomeNav";
import BoardItem from "../BoardItem";
import { useState, useContext } from "react";
import BoardModal from "../modals/BoardModal";
import { DataContext } from "../../DataContext";

const Home = () => {
  const [data, setData] = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      {/* navigation bar */}
      <HomeNav
        setModalVisible={setModalVisible}
        boards={data}
        setBoards={setData}
      />
      <div style={{ paddingLeft: "5%", paddingTop: "2%", paddingRight: "5%" }}>
        <h2 style={{ fontFamily: "Arial, Sans-serif", fontWeight: "700" }}>
          My boards
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingTop: "2%",
            columnGap: "100px",
          }}
        >
          {/* render all boards */}
          {data.map(({ name, color }, index) => {
            return (
              <BoardItem
                color={color}
                name={name}
                data={data}
                setData={setData}
                index={index}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            );
          })}
        </div>
      </div>

      <BoardModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        name={""}
        color={""}
        operation={"add"}
      />
    </div>
  );
};

export default Home;
