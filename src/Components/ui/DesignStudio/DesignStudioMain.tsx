import React from "react";
import DesignStudioBannerWithMask from "./DesignStudioBannerWithMask";
import DesignStudioMaterial from "./DesignStudioMaterial";

function DesignStudioMain() {
  return (
    <div className=" h-[100rem] bg-black">
      <DesignStudioMaterial></DesignStudioMaterial>
      <DesignStudioBannerWithMask></DesignStudioBannerWithMask>
    </div>
  );
}

export default DesignStudioMain;
