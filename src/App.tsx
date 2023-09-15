import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import FileUploader from "./components/FileUploader";
import LoginPage from "./pages/LoginPage";
import imageService from "./services/image-service";
import userService, { User } from "./services/user-service";
import { getToken } from "./services/auth-service";
import { FilePondFile } from "filepond";
import { Image } from "./services/image-service";

import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useIsFetching } from "@tanstack/react-query";
import { LineWobble } from "@uiball/loaders";

import apiClient from "./services/api-client";

const App = () => {
  console.log(getToken());
  const [lastItemRef, inView] = useInView();
  const [user, setUser] = useState<User | null>(null);
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    userService
      .getUser()
      .then((res) => setUser(res.data))
      .catch((ex) => console.log(ex));
  }, []);

  useEffect(() => {
    //   imageService
    //     .getAllImages()
    //     .then((res) => setImages(res.data))
    //     .catch((err) => console.log(err));
    // }, []
  });

  const isFetching = useIsFetching();

  const { fetchNextPage, isFetchingNextPage, hasNextPage, data } =
    useInfiniteQuery({
      queryKey: ["images"],
      queryFn: ({ pageParam = 1 }) =>
        apiClient
          .get("/images/", { params: { page: pageParam } })
          .then((res) => res.data),
      staleTime: 15 * 60 * 1000, // 15m
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        // last page is d last res from server and has a prop called last_page (sent by server)
        return lastPage.last_page === allPages.length
          ? null
          : allPages.length + 1;
      },
    });

  const [hasFetchedNextPage, setHasFetchedNextPage] = useState(false);

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      console.log("works");
      fetchNextPage();
      setHasFetchedNextPage(true); // Set the flag to prevent further calls
    } else {
    }
  }, [inView, hasNextPage, isFetching, hasFetchedNextPage]);

  return (
    <div style={{ maxWidth: "560px" }} className="text-center container">
      <FileUploader
        onImageUploaded={(image: Image) => setImages([image, ...images])}
      />
      <Gallery data={data} />
      <div className="d-flex justify-content-center">
        {data && isFetchingNextPage && (
          <LineWobble
            size={80}
            lineWeight={5}
            speed={1.75}
            color="rgb(35, 31, 32)"
          />
        )}
      </div>
      <div ref={lastItemRef}></div>
    </div>
    // <LoginPage />
  );
};

export default App;
