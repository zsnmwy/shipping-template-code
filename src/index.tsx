import React from "react";
import { initializeWidget } from "@apitable/widget-sdk";
import { Setting } from "./setting";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

export const HelloWorld: React.FC = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    window.alert(decodedText);
  };
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1, overflow: "auto", padding: "0 8px" }}>
        hello，world 🚀
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>

      <Setting />
    </div>
  );
};

initializeWidget(HelloWorld, process.env.WIDGET_PACKAGE_ID);
