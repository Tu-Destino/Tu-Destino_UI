"use client"
import ToggleNav from "@/components/discover/ToggleNav";
import SkeletonDetails from "@/components/skeletons/SkeletonDetails";
import useLogicToggleNav from "@/hooks/discover/logicToggleNav";

export default function page() {
  const {
    isLoadingPosts,
    isLoadingTags,
    isErrorPosts,
    isErrorTags,
  } = useLogicToggleNav();

  if (isErrorPosts || isErrorTags) {
    return (
      <>
        <SkeletonDetails />
      </>
    );
  }

  if (isLoadingPosts || isLoadingTags) {
    return (
      <>
        <SkeletonDetails />
      </>
    );
  }

  return (
    <section className="w-full h-full bg-slate-950 flex flex-row">
      <ToggleNav />
    </section>
  );
}
