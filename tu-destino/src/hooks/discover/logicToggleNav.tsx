import { useEffect, useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux";
import getListTitle from "@/redux/listTitles/thunks";
import { useGetAllPostsQuery } from "@/redux/apis/postApi";
import { useGetAllTagsQuery } from "@/redux/apis/tagsApi";

function useLogicToggleNav() {
  const [showComponent, setShowComponent] = useState<boolean | null>(null);

  const { listTitle = [] } = useAppSelector((state) => state.listTitles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListTitle());
  }, []);

  const {
    data: postData = [],
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
  } = useGetAllPostsQuery();

  const {
    data: tagsData = [],
    isLoading: isLoadingTags,
    isError: isErrorTags,
  } = useGetAllTagsQuery();



  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showComponent]);


  return {
    showComponent,
    tagsData,
    postData,
    listTitle,
    isLoadingPosts,
    isLoadingTags,
    isErrorPosts,
    isErrorTags
  };
}

export default useLogicToggleNav;
