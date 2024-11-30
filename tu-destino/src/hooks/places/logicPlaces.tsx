import useData from '@/helpers/Zustand/DataLoad';
import { useState, useEffect } from 'react';


type Place = {
  name: string;
  img: string;
  type: string;
};

export const useLogicInfoPlaces = (title: string) => {
  const { places, postDiscover } = useData();
  const [listType, setListType] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const listPlaces: Place[] = [];

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

      const filteredPlaces = listPlaces.filter(p => p.type.toLowerCase() === title.toLowerCase());
      setListType(filteredPlaces);
      if (filteredPlaces.length!=0) {
           setLoading(false);
      }
   
    };

    fetchData();
  }, [ places, postDiscover]);

  return { listType, loading };
};
