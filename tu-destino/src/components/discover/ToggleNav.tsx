import ButtonPanel from "./ButtonPanel";
import NavDiscover, { AddPost } from "./NavDiscover";
import Gallery from "../../components/discover/Gallery";
import logicToggleNav from "@/hooks/discover/logicToggleNav";

function ButtonModalDesktop({
  tags,
  titles,
}: {
  tags: string[];
  titles: string[];
}) {
  return (
    <div className="fixed z-50 bg-green-400 bottom-[1%] right-[2%] rounded-full">
      <AddPost placeElement={"Postear"} placeList={tags} placeTitles={titles} />
    </div>
  );
}

const ToggleNav: React.FC = () => {
  const {
    postData,
    tagsData,
    showComponent,
    listTitle
  } = logicToggleNav();

  return (
    <>
      {showComponent ? (
        <>
          <ButtonPanel suggestions={tagsData} />
          <Gallery initialPlaces={postData} />
          <ButtonModalDesktop tags={tagsData} titles={listTitle} />
        </>
      ) : (
        <>
          <NavDiscover list={tagsData} titles={listTitle} />
          <Gallery initialPlaces={postData} />
        </>
      )}
    </>
  );
};

export default ToggleNav;
