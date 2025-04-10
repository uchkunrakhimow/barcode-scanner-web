import type { ReactElement } from "react";

import Spinner from "./Spinner";

export default function LoadingMessage(): ReactElement {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p>Инициализация сканера...</p>
      <Spinner color="black" />
      <p>(Это также можно сделать в фоновом режиме)</p>
    </div>
  );
}
