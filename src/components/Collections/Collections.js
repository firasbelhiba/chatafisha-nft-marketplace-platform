import React, { Component } from "react";
import axios from "axios";
import { getMCollection } from "../../utils";
import { Link } from "react-router-dom";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json/collections";

class Collections extends Component {
  state = {
    collectionData: [],
  };

  componentDidMount() {
    getMCollection("firas.testnet")
      .then((res) => {
        console.log(res);
        this.setState({
          collectionData: res,
        });
      })
      .catch((err) => console.log(err));

    //     axios.get(`${BASE_URL}`)
    //         .then(res => {
    //             this.setState({
    //                 data: res.data,
    //                 collectionData: res.data.collectionData
    //             })
    //             // console.log(this.state.data)
    //         })
    //     .catch(err => console.log(err))
  }
  render() {
    return (
      <section className="popular-collections-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Intro */}
              {/* <div className="intro d-flex justify-content-between align-items-end m-0">
                                    <div className="intro-content">
                                        <span>{this.state.data.preHeading}</span>
                                        <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                    </div>
                                    <div className="intro-btn">
                                        <a className="btn content-btn text-left" href="/explore-2">{this.state.data.btnText}</a>
                                    </div>
                                </div> */}
            </div>
          </div>
          <div className="row items">
            {this.state.collectionData.map((item, idx) => {
              return (
                <div
                  key={`cd_${idx}`}
                  className="col-12 col-sm-6 col-lg-3 item"
                >
                  <div className="card no-hover text-center">
                    <div className="image-over">
                      <a href="/item-details">
                        <img
                          className="card-img-top"
                          src={item.metadata.media}
                          alt=""
                        />
                      </a>
                      {/* Seller */}
                      {/* <a className="seller" href="/item-details">
                                                <div className="seller-thumb avatar-lg">
                                                    <img className="rounded-circle" src={item.avatar} alt="" />
                                                </div>
                                            </a> */}
                    </div>
                    {/* Card Caption */}
                    <div className="card-caption col-12 p-0">
                      {/* Card Body */}
                      <div className="card-body mt-4">
                        <Link
                          to={{
                            pathname: "/item-details",
                            state: { itemData: item }, // Pass the item data as the state
                          }}
                        >
                          <h5 className="mb-2">{item.metadata.title}</h5>
                        </Link>
                        <span>{item.content}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Collections;
