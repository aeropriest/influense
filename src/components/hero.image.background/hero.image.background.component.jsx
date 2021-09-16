import Header from "../header/header-component";
import BiddingBlock from "../bidding-block/bidding-block.component";
import { CelebritiesContext } from "../../context/celebrities.context";

import "./hero.image.background.styles.css";

const HeroImageBackground = () => {
  return (
    <CelebritiesContext.Consumer>
      {(context) => {
        console.log(
          "current selected image is ",
          context.selectedCelebrityImage
        );
        if (context.selectedCelebrityHandle) {
          console.log("load the celebrity now", context.selectedCelebrityImage);
        }

        return (
          <div
            className="celebrity-hero-background"
            style={{ "--img": `url(${context.selectedCelebrity.profileImg})` }}
          >
            <Header />
            <div className="heading-text">{context.selectedCelebrity.name}</div>
            <div className="handle-text">
              @{context.selectedCelebrity.handle}
            </div>
            <div className="followers-text">
              {context.selectedCelebrity.followers}M followers
            </div>
            <BiddingBlock
            // highestBid={context.selectedCelebrity.gallery[0].highestBid}
            // timeLeft={context.selectedCelebrity.gallery[0].timeLeft}
            />
          </div>
        );
      }}
    </CelebritiesContext.Consumer>
  );
};

export default HeroImageBackground;
