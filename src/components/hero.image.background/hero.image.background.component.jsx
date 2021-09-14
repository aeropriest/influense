import Header from "../header/header-component";
import BiddingBlock from "../bidding-block/bidding-block.component";
import { CelebritiesContext } from "../../context/celebrities.context";

import "./hero.image.background.styles.css";

const HeroImageBackground = () => {
  return (
    <CelebritiesContext.Consumer>
      {(context) => {
        //            console.log('----- hero image -----')
        //            console.log(context)
        const { handle, name, followers, highestBid, timeLeft, profileImg } =
          context.selectedCelebrity;
        return (
          <div
            className="celebrity-hero-background"
            style={{ "--img": `url(${profileImg})` }}
          >
            <Header />
            <div className="heading-text">{name}</div>
            <div className="handle-text">@{handle}</div>
            <div className="followers-text">{followers}M followers</div>
            <BiddingBlock highestBid={highestBid} />
          </div>
        );
      }}
    </CelebritiesContext.Consumer>
  );
};

export default HeroImageBackground;
