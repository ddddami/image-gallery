import React from "react";
import { InfiniteData } from "@tanstack/react-query";
import ImageCard from "./ImageCard";

interface Image {
  id: number;
  url: string;
}

interface Props {
  data: InfiniteData<any>[];
}
const Gallery = ({ data }: any) => {
  console.log(data);

  return (
    <>
      <h2>Gallery🙌</h2>
      <div className="row">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Gallery;
