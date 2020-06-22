import store from "../../core/store";
import { useState, useEffect } from "react";
import { Cloudinary } from "cloudinary-core";
import { Epayco } from "../../core/epayco";

export function useSettings() {
  const [cloudinary, setCloudinary] = useState<Cloudinary>();
  const [epayco, setEpayco] = useState<Epayco>();
  const [ready, setReady] = useState(false);

  async function init() {
    const cloudinary = await store.settings.cloudinary();
    setCloudinary(new Cloudinary({ cloud_name: cloudinary.cloud }));

    const epayco = await store.settings.epayco();
    setEpayco(new Epayco(epayco));

    setReady(true);
  }

  useEffect(() => {
    init();
  }, []);

  return {
    ready,
    cloudinary,
    epayco,
  };
}

export default useSettings;
