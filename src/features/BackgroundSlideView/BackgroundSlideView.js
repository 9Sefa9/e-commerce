import backgroundVideo from "./background.mp4";
import { VideoTitle , BackgroundVideoMainContainer } from "./BackgroundSlideViewStyledComponent.js";
const BackgroundSlideView = () => {
  return (
    <>
      
      <BackgroundVideoMainContainer>
      <VideoTitle >Next Generation Fashion 2022</VideoTitle>
        <video src={backgroundVideo} muted="false" autoPlay loop></video>
      </BackgroundVideoMainContainer>
    </>
  );
};
export default BackgroundSlideView;

