
import useData from "@/helpers/Zustand/DataLoad";
import { useEffect, useLayoutEffect, useState } from "react";

function logicToggleNav() {

  const [showComponent, setShowComponent] = useState<boolean | null>(null);
  const { tags, postDiscover,optionSearch} = useData();
  const [isLoading,setIsLoading] = useState<boolean>(true);
useLayoutEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 767) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  };

  window.addEventListener('resize', handleResize);
  setTimeout(handleResize, 1300);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
useEffect(()=>{
  setTimeout(()=>{
    if(postDiscover.length !=0){
      setIsLoading(false);
    }
  },1300)
},[postDiscover])

  return {
    isLoading,
    showComponent,
    tags,
    postDiscover,
    optionSearch
  }
}

export default logicToggleNav
