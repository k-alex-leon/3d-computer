import { Html, Mask } from "@react-three/drei";
import { PlaneGeometry } from "three";
import "./Screen.css";
const DESKTOP_URL = "https://k-alex-leon.github.io/desktop-view/";
export default function Screen() {
  return (
    <div className="screen-container">
      <iframe
        // width={650}
        // height={430}
        className="screen-frame"
        src={DESKTOP_URL}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // allowFullScreen
      ></iframe>
    </div>
  );
}
