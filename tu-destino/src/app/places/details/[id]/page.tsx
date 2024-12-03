"use client";

import Footer from "@/components/common/footer/Footer";
import NavigationBar from "@/components/common/nav/NavigationBar";
import CardInfo from "@/components/places/details/info/CardInfo";
import Explore from "@/components/places/details/Explore";
import SliderDetails from "@/components/places/details/Slider";
import { useParams } from "next/navigation";
import { useGetImagesQuery, useGetPlaceQuery } from "@/redux/apis/placeApi";
import SkeletonDetails from "@/components/skeletons/SkeletonDetails";

const PageDetail: React.FC = () => {
  const { id } = useParams();

  // Decodificar el ID antes de pasarlo a la consulta
  const decodedId = Array.isArray(id)
    ? decodeURIComponent(id[0])
    : decodeURIComponent(id);

  // Consultar datos con RTK Query
  const {
    data: placeData,
    isLoading: isLoadingPlace,
    isError: isErrorPlace,
  } = useGetPlaceQuery(decodedId);

  const {
    data: imageList,
    isLoading: isLoadingImages,
    isError: isErrorImages,
  } = useGetImagesQuery(decodedId);

  if (isLoadingPlace || isLoadingImages) {
    return (
      <>
      <NavigationBar />
      <SkeletonDetails/>
      </>
    );
  }

  if (isErrorPlace || isErrorImages) {
    return (
      <div>
        <h1>Error al cargar los datos</h1>
        <p>Por favor, verifica tu conexión o intenta nuevamente más tarde.</p>
      </div>
    );
  }

  return (
    <>
      <NavigationBar />
      <SliderDetails
        imgList={imageList?.map((img) => img) || []}
        title={placeData?.title || "Título no disponible"}
      />
      <CardInfo data={placeData} decodedId={decodedId} />
      <Explore />
      <Footer />
    </>
  );
};

export default PageDetail;
