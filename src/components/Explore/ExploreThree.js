import React, { Component, useEffect, useState } from "react";
import { getNftTokens, getTokens } from "../../utils";

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

const ExploreThree = ({ tokens, loading }) => {
  return (
    <section className="explore-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center mb-4">
              <span>{initData.pre_heading}</span>
              <h3 className="mt-3 mb-0">{initData.heading}</h3>
              <p>{initData.content}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-12">
            {/* Explore Menu */}
            <div
              className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4"
              data-toggle="buttons"
            >
              <label className="btn active d-table text-uppercase p-2">
                <input
                  type="radio"
                  defaultValue="all"
                  defaultChecked
                  className="explore-btn"
                />
                <span>{initData.filter_1}</span>
              </label>
              <label className="btn d-table text-uppercase p-2">
                <input
                  type="radio"
                  defaultValue="art"
                  className="explore-btn"
                />
                <span>{initData.filter_2}</span>
              </label>
              <label className="btn d-table text-uppercase p-2">
                <input
                  type="radio"
                  defaultValue="music"
                  className="explore-btn"
                />
                <span>{initData.filter_3}</span>
              </label>
              <label className="btn d-table text-uppercase p-2">
                <input
                  type="radio"
                  defaultValue="collectibles"
                  className="explore-btn"
                />
                <span>{initData.filter_4}</span>
              </label>
              <label className="btn d-table text-uppercase p-2">
                <input
                  type="radio"
                  defaultValue="sports"
                  className="explore-btn"
                />
                <span>{initData.filter_5}</span>
              </label>
            </div>
          </div>
        </div>
        <div className="row items explore-items">
          <div>
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

                        <a
                          className="btn btn-bordered-white btn-smaller mt-3"
                          href="/wallet-connect"
                        >
                          <i className="icon-handbag mr-2" />
                          Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreThree;
