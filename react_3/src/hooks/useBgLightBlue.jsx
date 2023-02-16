import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    document.body.style.background = "lightblue";
    return () => {
      document.body.style.background = "";
    };
  }, []);
};
