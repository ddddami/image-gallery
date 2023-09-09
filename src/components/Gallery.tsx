interface Image {
  id: number;
  url: string;
}

interface Props {
  images: Image[];
}
const Gallery = ({ images }: Props) => {
  return (
    <>
      <h2>Gallery🙌</h2>
      <div className="row">
        {images.map((image) => (
          <img
            key={image.id}
            className="col-md-4 p-1"
            src={`http://localhost:8000/storage/${image.url}`}
            alt=""
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
