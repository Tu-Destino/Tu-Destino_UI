
import { useGetAllPostsQuery } from "@/redux/apis/postApi";
import { Post } from "@/types/types";
import { useEffect, useState } from "react";

function useLogicGallery(initialPlaces: Post[]) {
 
  const [places, setPlaces] = useState<Post[]>(initialPlaces);
  const [isClient, setIsClient] = useState(false)

  const {
    data: postData= [],
  } = useGetAllPostsQuery();
  
  useEffect(() => {
    setPlaces(postData);
  }, [postData]);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const loadMorePlaces = () => {
    if (isClient) {
      const statiPlaces= initialPlaces;
      setPlaces((prev) => [...prev, ...statiPlaces]);
    }
  };

  useEffect(() => {
    if (!isClient) return;
    const container = document.querySelector(".gallery-container");

    const handleScroll = () => {
      if (
        container &&
        container.scrollTop + container.clientHeight >=
          container.scrollHeight * 0.98
      ) {
        loadMorePlaces();
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isClient]);

  
  return {
    places,
  };
}

export default useLogicGallery;
