import backgroundVideo from "./background.mp4";
import "./BackgroundSlideViewStylesheet.css";
const BackgroundSlideView = () => {
  return (
    <>
      <div className="background-video-container" />
      <div className="video-title"></div>
      <video src={backgroundVideo} muted autoPlay loop></video>

    </>
  );
};
export default BackgroundSlideView;

