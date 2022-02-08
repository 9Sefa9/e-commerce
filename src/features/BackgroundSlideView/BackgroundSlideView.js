import backgroundVideo from "./background.mp4";
import "./BackgroundSlideViewStylesheet.css";
const BackgroundSlideView = () => {
  return (
    <>
      <video src={backgroundVideo} muted autoPlay loop></video>
    </>
  );
};
export default BackgroundSlideView;

