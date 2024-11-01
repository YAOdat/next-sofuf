'use client'
import React, { useEffect } from "react";

export default function AdComponent() {
  useEffect(() => {
    const adContainer = document.getElementById("ad-container");
    const script = document.createElement("script");
    script.src = "https://lovingassociate.com/b/3UVi0JP.3/pxv/bOmXV/JbZODA0/1sN/jUYXzKNyzBAZyKLET/Uu2zNkjHMZ3YMWDIMJ";
    script.async = true;
    script.crossOrigin = "anonymous";
    if (adContainer) {
      adContainer.appendChild(script);
    }

    return () => {
      if (adContainer) {
        adContainer.removeChild(script);
      }
    };
  }, []);

  return <div id="ad-container" className="my-4"></div>;
}
