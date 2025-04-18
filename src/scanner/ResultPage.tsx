import { SymbologyDescription } from "@scandit/web-datacapture-barcode";
import type { ReactElement } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MenuButton from "../components/MenuButton";
import HomeIcon from "../icons/HomeIcon";
import ScannerIcon from "../icons/ScannerIcon";
import { useStore } from "../store";

export default function ResultPage(): ReactElement | null {
  const { barcode } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (barcode == null) {
      navigate("/scanner");
    } else {
      axios.post("https://techdev.uz/api/result", {
        barcode: barcode.data,
        addOnData: barcode.addOnData,
      });
    }
  }, [barcode, navigate]);

  if (barcode == null) {
    return null;
  }

  const symbologyDescription = new SymbologyDescription(barcode.symbology);

  return (
    <main className="w-screen h-[100dvh] p-4 flex flex-col gap-4 items-center justify-center lg:max-w-[800px] lg:mx-auto">
      <h1 className="font-bold text-2xl">
        {symbologyDescription.readableName}
      </h1>
      <pre className="p-4 whitespace-normal rounded bg-gray-100 text-gray-700 overflow-scroll">
        {barcode.data} {barcode.addOnData}
      </pre>
      <MenuButton to="/scanner">
        <ScannerIcon color="black" />
        Сканировать еще раз
      </MenuButton>
      <MenuButton to="/">
        <HomeIcon color="black" />
        Дом
      </MenuButton>
    </main>
  );
}
