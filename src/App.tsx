import { useEffect, useState } from "react";
import Gallery from "./components/Gallery";
import FileUploader from "./components/FileUploader";
import LoginPage from "./pages/LoginPage";
import imageService from "./services/image-service";
import userService, { User } from "./services/user-service";
import { getToken } from "./services/auth-service";
import { FilePondFile } from "filepond";
import { Image } from "./services/image-service";

import { useInfiniteQuery, useIsFetching } from "@tanstack/react-query";
import apiClient from "./services/api-client";

const App = () => {
  console.log(getToken());
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

  const handleFetchNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    } else {
    }
  };
  return (
    <div style={{ maxWidth: "560px" }} className="text-center container">
      <FileUploader
        onImageUploaded={(image: Image) => setImages([image, ...images])}
      />
      <Gallery data={data} />
      {!isFetching && (
        <button
          disabled={isFetchingNextPage || !hasNextPage}
          className="btn btn-primary"
          onClick={handleFetchNextPage}
        >
          Load more...
        </button>
      )}
    </div>
    // <LoginPage />
  );
};

export default App;
