interface Image {
  id: number;
  url: string;
}

interface Props {
  image: Image;
}

const ImageCard = ({ image }: Props) => {
  return (
    <div className="col-md-4 p-1 card card-img-scale overflow-hidden bg-transparent mb-2 border-0">
      <div className="card-img-scale-wrapper">
        <img
          src={`http://localhost:8001/storage/${image.url}`}
          alt=""
          className="card-img"
        />
      </div>
    </div>
  );
};

export default ImageCard;
