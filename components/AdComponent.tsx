// components/AdComponent.tsx
'use client'
import React,  { useEffect } from "react";

export default function AdComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://lovingassociate.com/bz3eVr0rP.3hpLvFb/mFVDJDZvDE0l1iNDjEYDzTN/zDALySLFTvU/2/NzjEMb3LMWD/M-";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ad-container" className="my-4"></div>;
}
