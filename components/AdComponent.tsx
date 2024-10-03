// components/AdComponent.tsx
import React,  { useEffect } from "react";

export default function AdComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://lovingassociate.com/bC3.Vf0SPU3hpFvdb/m/VhJaZIDE0t1SNzjWAF3tNCz/gqyKLvTDU_2GMgDmcY3ZOhDDMe";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ad-container" className="my-4"></div>;
}
