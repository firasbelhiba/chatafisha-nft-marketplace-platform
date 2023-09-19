import React, { useEffect, useState } from "react";
import axios from "axios";
import { accountId, getMCollection } from "../../utils";
import { Link } from "react-router-dom";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json/collections";

const Collections = () => {
  const [collectionData, setCollectionData] = useState([]);
  const handleLinkClick = (url) => {
    window.location.href = url;
  };
  const initData = {
    pre_heading: "My Collection",
    heading: "Collection",
    btn_1: "View All",
    btn_2: "Load More",
  };

  useEffect(() => {
    getMCollection(accountId().accountId).then((res) => {
      console.log(res);
      setCollectionData(res);
    });
  }, []);

  return (
    <section className="popular-collections-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <span>{initData.pre_heading}</span>
                <h3 className="mt-3 mb-0">{initData.heading}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row items">
          {collectionData.map((item, idx) => {
            return (
              <div key={`cd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                <div className="card no-hover text-center">
                  <div className="image-over">
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
                    >
                      <img
                        className="card-img-top"
                        src={item.metadata.media}
                        alt=""
                      />
                    </Link>
                  </div>
                  {/* Card Caption */}
                  <div className="card-caption col-12 p-0">
                    {/* Card Body */}
                    <div className="card-body mt-4">
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
                        state={{ stateParam: item }} // Pass the item data as the state
                      >
                        <h5 className="mb-2">{item.metadata.title}</h5>
                      </Link>
                      <span>{item.content}</span>
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
                      <i className="icon-handbag mr-2" />
                      Transfer
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;
