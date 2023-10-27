import { Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { DataContext } from "../../DataContext";

const BoardModal = ({
  modalVisible,
  setModalVisible,
  name,
  color,
  operation,
}) => {
  //Get data from context API
  const [data, setData] = useContext(DataContext);
  const [selectedColor, setSelectedColor] = useState(color);
  const [boardName, setBoardName] = useState(name);

  //when submit is clicked this runs
  const submitData = (event) => {
    event.preventDefault();

    //if we are adding the board
    if (operation === "add") {
      const newBoard = {
        name: { boardName }.boardName,
        color: { selectedColor }.selectedColor,
        posts: [],
      };
      setData([...data, newBoard]);
    }
    //if we are editing a board
    else {
      const index = data.findIndex((item) => item.name === name);
      const updatedData = [...data];
      updatedData[index] = {
        ...updatedData[index],
        name: { boardName }.boardName,
        color: { selectedColor }.selectedColor,
      };
      setData(updatedData);
    }

    //setting states to empty
    setSelectedColor(null);
    setBoardName("");
    setModalVisible(false);
  };

  //color options we have of boards
  const colorOptions = [
    { hexCode: "#A7F0F9" },
    { hexCode: "#FFEDC1" },
    { hexCode: "#FFAEC0" },
    { hexCode: "#C5C5FC" },
  ];

  //onchange function textField of name
  const nameChange = (event) => {
    setBoardName(event.target.value);
  };

  return (
    <Modal
      show={modalVisible}
      onHide={() => {
        setModalVisible(false);
      }}
      centered
    >
      <Modal.Body>
        {/* heading of modal */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <h4>Add a name for your board</h4>
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
        {/* form of modal */}
        <div>
          <div style={{ marginBottom: "2rem" }}>
            <input
              placeholder="Type name"
              type="text"
              id="place"
              className="form-control-lg form-control"
              name="place"
              value={boardName}
              onChange={nameChange}
            />
          </div>
          <h4>Select post color:</h4>
          <p>Here are some templates to help you get started</p>
          <div className="color-options" style={{ display: "flex" }}>
            {colorOptions.map((option) => (
              <div
                key={option.hexCode}
                className={`color-option ${
                  option.hexCode === selectedColor ? "selected" : ""
                }`}
                style={{
                  backgroundColor: option.hexCode,
                  width: "1.5rem",
                  cursor: "pointer",
                  height: "1.5rem",
                  borderRadius: "50%",
                  margin: "0 10px",
                  border:
                    option.hexCode === selectedColor
                      ? "2px solid blue"
                      : "none",
                }}
                onClick={() => setSelectedColor(option.hexCode)}
              ></div>
            ))}
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
              {operation === "add" ? "Create board" : "Update board"}
            </button>
          </div>
        </div>
        {/* end of form */}
      </Modal.Body>
    </Modal>
  );
};

export default BoardModal;
