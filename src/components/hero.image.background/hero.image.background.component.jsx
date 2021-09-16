import Header from "../header/header-component";
import BiddingBlock from "../bidding-block/bidding-block.component";
import firebaseContext, {
  firebaseDatabaseName,
} from "../../context/firebase.context";
import { CurentCelebrityContext } from "../../context/current.celebrity.context";

import "./hero.image.background.styles.css";
import { useState } from "react";

const HeroImageBackground = () => {
  const [celebrity, setCelebrity] = useState({});
  return (
    <CurentCelebrityContext.Consumer>
      {(context) => {
        console.log("HeroImageBackground", context);
        if (context.currentCelebrity) {
          const profileRecord = `${firebaseDatabaseName}/${context.currentCelebrity}`;
          console.log("HeroImageBackground profileRecord", profileRecord);

          firebaseContext
            .collection(firebaseDatabaseName)
            .get()
            .then((data) => {
              data.forEach((d) => {
                console.log(d.data());
              });
            });
        }
        return (
          <div
            className="celebrity-hero-background"
            style={{ "--img": `url(${celebrity.profileImg})` }}
          >
            <Header />
            <div className="heading-text">{celebrity.name}</div>
            <div className="handle-text">@{celebrity.handle}</div>
            <div className="followers-text">
              {celebrity.followers}M followers
            </div>
            <BiddingBlock
            // highestBid={context.selectedCelebrity.gallery[0].highestBid}
            // timeLeft={context.selectedCelebrity.gallery[0].timeLeft}
            />
          </div>
        );
      }}
    </CurentCelebrityContext.Consumer>
  );
};

export default HeroImageBackground;
