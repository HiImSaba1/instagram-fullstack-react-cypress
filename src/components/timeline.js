/* eslint-disable no-nested-ternary */
// import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


export default function Timeline() {
  // Get the current logged in user's photos
    // const { photos } = usePhotos();
  
  // On loading we need to use react skeleton
  // If we have photos, render them (create a post component)
  // If the user has no photos, tell them to create some photos
  
    return (
      <div className="container mx-auto">
        {/* <Skeleton count={4} height={400} width={640} className="mb-5" /> */}
        <p>I am the timeline</p>
      </div>
    );
}

      //   {!photos ? (
      //     <Skeleton count={4} height={400} width={640} className="mb-5" />
      //   ) : photos?.length > 0 ? (
      //     photos.map((content) => <Post key={content.docId} content={content} />)
      //   ) : (
      //     <p className="text-center text-2xl">Follow people to see photos</p>
      //   )}