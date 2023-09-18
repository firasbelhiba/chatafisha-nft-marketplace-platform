import React, { Component, useEffect, useState } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Explore from "../components/Explore/ExploreFour";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import ExploreThree from "../components/Explore/ExploreThree";
import { getTokens } from "../utils";
import { Link } from "react-router-dom";

const initData = {
  pre_heading: "Explore",
  heading: "Exclusive Digital Assets",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
  filter_1: "All",
  filter_2: "Art",
  filter_3: "Music",
  filter_4: "Collectibles",
  filter_5: "Sports",
};

const ExploreThreee = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isComponentVisible, setComponentVisibility] = useState(false);
  useEffect(() => {
    getNfts();
  }, []);

  const getNfts = async () => {
    getTokens()
      .then((res) => {
        console.log("Tokens fetched:", res);
        setTokens(res);
      })
      .catch((error) => {
        console.error("Error fetching tokens:", error);
      });
    setLoading(false);
    setComponentVisibility(!isComponentVisible);
  };

  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  // console.log("Tokens:", tokens);
  // console.log("Loading:", loading);

  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 3" />

      <div className="row justify-content-center">
        <a className="btn btn-bordered-white flex-center" onClick={getNfts}>
          <i className="icon-loop mr-2" />
          Load Nfts if they're not loaded
        </a>
      </div>

      {tokens ? (
        isComponentVisible && (
          <section className="explore-area">
            <div className="container">
              <div className="row items explore-items">
                {tokens.map((item, idx) => {
                  return (
                    <div
                      key={`edth_${idx}`}
                      className="col-12 col-sm-6 col-lg-3 item explore-item"
                    >
                      <div className="card">
                        <div className="image-over">
                          <a href="/item-details">
                            <img
                              className="card-img-top"
                              src={item.metadata.media}
                              alt=""
                            />
                          </a>
                        </div>
                        {/* Card Caption */}
                        <div className="card-caption col-12 p-0">
                          {/* Card Body */}
                          <div className="card-body">
                            <a href="/item-details">
                              <h5 className="mb-0">{item.metadata.title}</h5>
                            </a>
                            <div className="seller d-flex align-items-center my-3">
                              <span>Owned By</span>
                              <a href="/author">
                                <h6 className="ml-2 mb-0">{item.owner_id}</h6>
                              </a>
                            </div>

                            <Link
                              to={`/item-details/${encodeURIComponent(
                                JSON.stringify(item)
                              )}`}
                              onClick={() => {
                                handleLinkClick(
                                  `/item-details/${encodeURIComponent(
                                    JSON.stringify(item)
                                  )}`
                                );
                              }}
                              state={{ stateParam: item }}
                              className="btn btn-bordered-white btn-smaller mt-3"
                            >
                              <i className="icon-rocket mr-2" />
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )
      ) : (
        <div> No tokens found</div>
      )}
      <Footer />
      <ModalSearch />
      <ModalMenu />
      <Scrollup />
    </div>
  );
};

export default ExploreThreee;
