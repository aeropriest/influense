import { Dialog, makeStyles } from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import CloseIcon from "@material-ui/icons/Cancel";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import SearchBox from "../components/searchbox.component/searchbox.component";
import { CelebritiesContext } from "../context/celebrities.context";

const CelebritySearchPanel = (setSearchWindow) => {
  return (
    <CelebritiesContext.Consumer>
      {(context) => {
        console.log("load into the panel", context.selectedCelebrity.gallery);
        return (
          <section className="container-fluid searchPanel px-4">
            <div className="row justify-content-center">
              <div className="col-8 col-lg-4 searchBar">
                <img src={CloseIcon} alt="" />
                <input type="search" placeholder="Search Celebrity" />
              </div>
            </div>
            <div className="row cardOuter"></div>

            {context.selectedCelebrity.gallery.map((item, index) =>
              item && item.name != null ? (
                <div className="col-6 col-lg-3 singleCard" key={index}>
                  <img src={item.imageUrl} alt="" />
                  <div className="fixed-bar">
                    <div>
                      <div className="text-end">Highest Bid</div>
                      <div>
                        <span>{item.highestBid} ETH</span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              ) : null
            )}

            <div className="cancelBtn"></div>
          </section>
        );
      }}
    </CelebritiesContext.Consumer>
  );
};

export default CelebritySearchPanel;
