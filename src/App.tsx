import images from "./services/image-service";

const App = () => {
  return (
    <div>
      <div style={{ maxWidth: "500px" }} className="container text-center">
        <h2>Gallery🙌</h2>
        <div className="row">
          {images.map((image) => (
            <img className="col-md-4 p-1" src={image.url} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
