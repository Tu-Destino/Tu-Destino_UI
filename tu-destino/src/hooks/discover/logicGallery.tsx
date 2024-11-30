
import useData from "@/helpers/Zustand/DataLoad";
import { Post } from "@/types/types";
import { useEffect, useState } from "react";

function useLogicGallery(initialPlaces: Post[]) {
 
  const [places, setPlaces] = useState<Post[]>(initialPlaces);
  const [isClient, setIsClient] = useState(false);
  const { postDiscover } = useData();
  useEffect(() => {
    setPlaces(postDiscover);
  }, [postDiscover]);

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
