import backgroundVideo from "./background.mp4";
import "./BackgroundSlideView.stylesheet.css";
const BackgroundSlideView = () => {
  return (
    <>
      <video src={backgroundVideo} muted autoPlay loop></video>
    </>
  );
};
export default BackgroundSlideView;

