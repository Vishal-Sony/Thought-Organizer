import NoPostImg from "../img/noPost.png";

const NoItem = () => {
  // image and text if no posts are present
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10%",
      }}
    >
      <img
        src={NoPostImg}
        height="215px"
        width="215px"
        className="d-inline-block align-top"
        alt="Search"
      />
      <b2
        style={{
          fontFamily: "Arial, Sans-serif",
          fontWeight: "700",
          fontSize: "16px",
        }}
      >
        Nothing Here Yet
      </b2>
      <b1
        style={{
          fontFamily: "Arial, Sans-serif",
          fontWeight: "400",
          fontSize: "14px",
        }}
      >
        Create your first post by clicking on the '+' button above
      </b1>
    </div>
  );
};

export default NoItem;
