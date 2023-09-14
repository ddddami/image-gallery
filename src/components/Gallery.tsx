import ImageCard from "./ImageCard";

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
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default Gallery;
