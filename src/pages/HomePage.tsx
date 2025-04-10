import type { ReactElement } from "react";
import { useEffect } from "react";

import LoadingMessage from "../components/LoadingMessage";
import MenuButton from "../components/MenuButton";
import Show from "../components/Show";
import ScannerIcon from "../icons/ScannerIcon";
import SettingsIcon from "../icons/SettingsIcon";
import { useSDK } from "../sdk";

export default function HomePage(): ReactElement {
  const { loading, sdk } = useSDK();

  useEffect(() => {
    if (!loading) {
      void sdk.enableScanning(false);
    }
  }, [loading, sdk]);

  return (
    <main className="w-screen h-[100dvh] p-4 flex flex-col gap-4 lg:max-w-[800px] lg:mx-auto">
      <Show when={loading}>
        <LoadingMessage />
      </Show>
      <Show when={!loading}>
        <div className="flex flex-col items-center justify-center gap-4 h-full">
          <img
            className="w-[12rem] mb-[2rem]"
            src="/logo-dark.png"
            alt="Logo not found"
          />
          <MenuButton to="/scanner">
            <ScannerIcon color="black" />
            Сканировать сейчас
          </MenuButton>
          <MenuButton to="/settings">
            <SettingsIcon color="black" />
            Настройки
          </MenuButton>
        </div>
      </Show>
    </main>
  );
}
