/* eslint-disable no-nested-ternary */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import usePhotos from "../hooks/usePhotos";
import Post from "./post";

export default function Timeline() {
  const { photos } = usePhotos();
  console.log("photos", photos);

  return (
    <div className="container col-span-2 px-4">
      {!photos ? (
        <Skeleton count={6} height={300} width={400} className="mb-5" />
      ) : photos?.length > 0 ? (
        photos.map((content) =>  content.username ? <Post key={content.docId} content={content} /> : null)
      ) : (
        <p className="text-center text-2xl pb-8">Follow people to see photos</p>
      )}
    </div>
  );
}

