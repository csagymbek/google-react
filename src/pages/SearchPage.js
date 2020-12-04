import React from "react";
import useGoogleSearch from "../configs/useGoogleSearch";
import { useStateValue } from "../context api/StateProvider";
import "../styles/SearchPage.css";
import Response from "../configs/response";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function SearchPage() {
  const [{ term = "Tesla" }, dispatch] = useStateValue();

  const { data } = useGoogleSearch(term); // Live API call

  // const data = Response;// Mock API call

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2016/11/google-logo.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {`${data?.searchInformation.formattedSearchTime} seconds`})
            {` for 
            ${term}`}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item?.link} className="searchPage__resultLink">
                {item?.pagemap?.cse_image?.length > 0 &&
                  item?.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item?.pagemap?.cse_image[0]?.src}
                      alt=""
                      className="searchPage__resultImage"
                    />
                  )}
                {item?.displayLink}
              </a>
              <a href={item?.link} className="searchPage__resultTitle">
                <h2>{item?.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item?.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
