"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PageDetail: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const [decodedId, setDecodedId] = useState<string>("");

  useEffect(() => {
    if (id) {
      const decodedIdValue = Array.isArray(id)
        ? decodeURIComponent(id[0])
        : decodeURIComponent(id);
      setDecodedId(decodedIdValue);
    }
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detalles de la página con ID: {decodedId}</h1>
      <p>
        Esta es una página dinámica que responde a diferentes IDs usando la
        nueva API de navegación de Next.js.
      </p>
    </div>
  );
};

export default PageDetail;
