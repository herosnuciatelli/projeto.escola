import LoadingGif from "./../assets/loading.gif";

const Loading = () => {
  return (
    <div
      className="container__loading"
      style={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "5",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={LoadingGif} style={{ width: "150px" }} />
    </div>
  );
};

export default Loading;
