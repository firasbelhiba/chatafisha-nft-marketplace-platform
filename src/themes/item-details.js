import React, { Component } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemDetail from "../components/ItemDetails/ItemDetails";
import LiveAuctions from "../components/Auctions/AuctionsThree";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import { accountId } from "../utils";




class ItemDetails extends Component {
    state = {
        initData: {},
        tabData_1: [],
        tabData_2: [],
        sellerData: []
    }

  render() {
    const { state } = this.props.location;
    const itemData = state && state.itemData;

    return (
      <div className="main">
        <Header />
        <Breadcrumb
          title="Item Details"
          subpage="Explore"
          page="Item Details"
        />
        <section className="item-details-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-5">
                <div className="item-info">
                  <div className="item-thumb text-center">
                    <img src={itemData.metadata.media} alt="" />
                  </div>
                  <div className="card no-hover countdown-times my-4">
                    {/* <div
                      className="countdown d-flex justify-content-center"
                      data-date={this.state.initData.date}
                    /> */}
                  </div>
                  {/* Netstorm Tab */}
                  <ul className="netstorm-tab nav nav-tabs" id="nav-tab">
                    {/* <li>
                      <a
                        className="active"
                        id="nav-home-tab"
                        data-toggle="pill"
                        href="#nav-home"
                      >
                        <h5 className="m-0">{this.state.initData.tab_1}</h5>
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        id="nav-profile-tab"
                        data-toggle="pill"
                        href="#nav-profile"
                      >
                        <h5 className="m-0">{this.state.initData.tab_2}</h5>
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        id="nav-contact-tab"
                        data-toggle="pill"
                        href="#nav-contact"
                      >
                        <h5 className="m-0">{this.state.initData.tab_3}</h5>
                      </a>
                    </li> */}
                  </ul>
                  {/* Tab Content */}
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home">
                      <ul className="list-unstyled">
                        {/* Single Tab List */}
                        {this.state.tabData_1.map((item, idx) => {
                          return (
                            <li
                              key={`tdo_${idx}`}
                              className="single-tab-list d-flex align-items-center"
                            >
                              <img
                                className="avatar-sm rounded-circle mr-3"
                                src={item.img}
                                alt=""
                              />
                              <p className="m-0">
                                Bid listed for <strong>{item.price}</strong>{" "}
                                {item.time} <br />
                                by <a href="/author">{item.author}</a>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="nav-profile">
                      <ul className="list-unstyled">
                        {/* Single Tab List */}
                        {this.state.tabData_2.map((item, idx) => {
                          return (
                            <li
                              key={`tdt_${idx}`}
                              className="single-tab-list d-flex align-items-center"
                            >
                              <img
                                className="avatar-sm rounded-circle mr-3"
                                src={item.img}
                                alt=""
                              />
                              <p className="m-0">
                                Bid listed for <strong>{item.price}</strong>{" "}
                                {item.time} <br />
                                by <a href="/author">{item.author}</a>
                              </p>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="nav-contact">
                      {/* Single Tab List */}
                      <div className="owner-meta d-flex align-items-center mt-3">
                        <span>Owner</span>
                        <a
                          className="owner d-flex align-items-center ml-2"
                          href="/author"
                        >
                          <img
                            className="avatar-sm rounded-circle"
                            src={this.state.initData.ownerImg}
                            alt=""
                          />
                          <h6 className="ml-2">
                            {this.state.initData.itemOwner}
                          </h6>
                        </a>
                      </div>
                      <p className="mt-2">
                        Created : {this.state.initData.created}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
              <div className="owner d-flex align-items-center">
                    <span>Title</span>
                    <h6 className="ml-2">{itemData.metadata.title}</h6>

                  </div>
                {/* Content */}
                <div className="content mt-5 mt-lg-0">
                  <h3 className="m-0">{this.state.initData.title}</h3>
                  <p>{this.state.initData.content}</p>
                  {/* Owner */}
                  <div className="owner d-flex align-items-center">
                    <span>Owned By</span>
                    {/* <a
                      className="owner-meta d-flex align-items-center ml-3"
                      href="/author"
                    >
                      <img
                        className="avatar-sm rounded-circle"
                        src={this.state.initData.ownerImg}
                        alt=""
                      />
                      <h6 className="ml-2">{accountId().accountId}</h6>
                    </a> */}
                    <h6 className="ml-2">{accountId().accountId}</h6>

                  </div>
                  <div className="owner d-flex align-items-center">
                    <span>Description</span>
                    {/* <a
                      className="owner-meta d-flex align-items-center ml-3"
                      href="/author"
                    >
                      <img
                        className="avatar-sm rounded-circle"
                        src={this.state.initData.ownerImg}
                        alt=""
                      />
                      <h6 className="ml-2">{accountId().accountId}</h6>
                    </a> */}
                    <h6 className="ml-2">{itemData.metadata.description}</h6>

                  </div>
                  {/* Item Info List */}
                  <div className="item-info-list mt-4">
                    <ul className="list-unstyled">
                      {/* <li className="price d-flex justify-content-between">
                        <span>Current Price {this.state.initData.price_1}</span>
                        <span>{this.state.initData.price_2}</span>
                        <span>{this.state.initData.count}</span>
                      </li> */}
                      <li>
                        {/* <span>Size </span> */}
                        {/* <span>{this.state.initData.size}</span> */}
                      </li>
                      <li>
                        <span>Volume Traded </span>
                        <span>{this.state.initData.volume}</span>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="row items">
                    {this.state.sellerData.map((item, idx) => {
                      return (
                        <div
                          key={`sd_${idx}`}
                          className="col-12 col-md-6 item px-lg-2"
                        >
                          <div className="card no-hover">
                            <div className="single-seller d-flex align-items-center">
                              <a href="/author">
                                <img
                                  className="avatar-md rounded-circle"
                                  src={item.img}
                                  alt=""
                                />
                              </a>
                             
                              <div className="seller-info ml-3">
                                <a className="seller mb-2" href="/author">
                                  {item.seller}
                                </a>
                                <span>{item.post}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="col-12 item px-lg-2">
                      <div className="card no-hover">
                        <h4 className="mt-0 mb-2">Highest Bid</h4>
                        <div className="price d-flex justify-content-between align-items-center">
                          <span>{this.state.initData.highest_bid}</span>
                          <span>{this.state.initData.bid_count}</span>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <a
                    className="d-block btn btn-bordered-white mt-4"
                    href="/wallet-connect"
                  >
                    {this.state.initData.btnText}
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <LiveAuctions /> */}
        <Footer />
        <ModalSearch />
        <ModalMenu />
        <Scrollup />
      </div>
    );
  }
}

export default ItemDetails;
