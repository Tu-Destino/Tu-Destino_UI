import { useGetAllPlacesQuery } from "@/redux/apis/placeApi";
import { useGetAllPostsQuery } from "@/redux/apis/postApi";
import { useState, useEffect } from "react";

type Place = {
  name: string;
  img: string;
  type: string;
};

export const useLogicInfoPlaces = (title: string) => {
  const { data: postDiscover} = useGetAllPostsQuery();
  const { data: places} = useGetAllPlacesQuery();
  const [listType, setListType] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const listPlaces: Place[] = [];

      if(places && postDiscover){
        places.forEach((p) => {
          for (const u of postDiscover) {
            if (p.title === u.title) {
              const newPlace: Place = {
                name: p.title,
                img: u.urlImg,
                type: p.enum_type,
              };
              listPlaces.push(newPlace);
              break;
            }
          }
        });
      }

      const filteredPlaces = listPlaces.filter(
        (p) => p.type.toLowerCase() === title.toLowerCase()
      );
      setListType(filteredPlaces);
      if (filteredPlaces.length != 0) {
        setLoading(false);
      }
    };

    fetchData();
  }, [places, postDiscover]);

  return { listType, loading };
};
