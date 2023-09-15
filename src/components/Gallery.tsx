import React from "react";
import { InfiniteData } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ImageCard from "./ImageCard";

interface Image {
  id: number;
  url: string;
}

interface Props {
  data: InfiniteData<any>[];
}
const Gallery = ({ data }: any) => {
  const renderImage = (data: any) => {
    if (data) {
      return data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.data.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </React.Fragment>
      ));
    } else {
      return Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="col-md-4 p-1 card card-img-scale overflow-hidden bg-transparent mb-2 border-0"
        >
          <Skeleton height={266} />
        </div>
      ));
    }
  };

  return (
    <>
      <h2>Gallery🙌</h2>
      <div className="row">
        {/* {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.data.map((image) => {
              <ImageCard key={image.id} image={image} />;
            })}
          </React.Fragment>
        ))} */}
        {renderImage(data)}
      </div>
    </>
  );
};

export default Gallery;
