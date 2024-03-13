import Lottie from "lottie-react";
import menu2 from "/public/menu2.json";
import { useMemo } from "react";

export function LottieColored() {
    const colorizedSource = useMemo(() => colorizeLottie(
      menu2,
      {
        "layers.0.shapes.0.it.1.c.k": "#333333",
        "layers.1.shapes.0.it.1.c.k": "#333333",
        "layers.2.shapes.0.it.1.c.k": "#333333",
        "layers.3.shapes.0.it.4.c.k": "#333333",
      }
    ), []);
  
    return <Lottie animationData={colorizedSource} autoplay={false} loop={false}  style={{scale:'0.7'}} />;
  }