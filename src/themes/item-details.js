import React, { Component, useEffect } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemDetail from "../components/ItemDetails/ItemDetail";
import LiveAuctions from "../components/Auctions/AuctionsThree";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import { accountId, transferNft } from "../utils";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useFormik } from "formik";

const ItemDetails = () => {
  const { type } = useParams();
  const history = useHistory();
  const stateParamVal = useLocation();
  const itemData = JSON.parse(decodeURIComponent(type));
  useEffect(() => {
    console.log(JSON.parse(decodeURIComponent(type)));
    console.log(stateParamVal);
    if (history.location.search.includes("transactionHashes")) {
      window.location.href = "/transfer-msg/succeeded";
    }
  }, []);
  const handleLinkClick = (url) => {
    window.location.href = url;
  };

  const formikTransfer = useFormik({
    initialValues: {
      address: "",
    },
    onSubmit: (values) => {
      console.log(values);
      transferNft(values.address, itemData.metadata.title)
        .then((res) => {
          console.log(res);
          history.push("/transfer-msg/succeeded");
        })
        .catch((err) => {
          handleLinkClick("/transfer-msg/failed");
        });
    },
  });

  return (
    <div className="main">
      <Header />
      <Breadcrumb title="Item Details" subpage="Explore" page="Item Details" />
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
                      data-date={thisinitData.date}
                    /> */}
                </div>
                {/* Netstorm Tab */}

                {/* Tab Content */}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Content */}
              <div className="content mt-5 mt-lg-0">
                <h3 className="m-0">{itemData.metadata.title}</h3>
                <p>{itemData.metadata.description}</p>
                {/* Owner */}
                <div className="owner d-flex align-items-center">
                  <span>Owned By</span>
                  <a
                    className="owner-meta d-flex align-items-center ml-3"
                    key={itemData.owner_id}
                    href=""
                  >
                    <h6 className="ml-2">{itemData.owner_id}</h6>
                  </a>
                </div>
                {/* Item Info List */}
                {/* <div className="item-info-list mt-4">
                    <ul className="list-unstyled">
                      <li className="price d-flex justify-content-between">
                        <span>Current Price {this.state.initData.price_1}</span>
                        <span>{this.state.initData.price_2}</span>
                        <span>{this.state.initData.count}</span>
                      </li>
                      <li>
                        <span>Size </span>
                        <span>{this.state.initData.size}</span>
                      </li>
                      <li>
                        <span>Volume Traded </span>
                        <span>{this.state.initData.volume}</span>
                      </li>
                    </ul>
                  </div> */}
                {itemData.owner_id == accountId().accountId && (
                  <form
                    onSubmit={formikTransfer.handleSubmit}
                    className="item-form card no-hover"
                  >
                    <div className="form-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        id="address"
                        placeholder="receiver id"
                        onChange={formikTransfer.handleChange}
                        onBlur={formikTransfer.handleBlur}
                        value={formikTransfer.values.title}
                        required="required"
                      />
                    </div>

                    <button className="btn w-100 mt-3 mt-sm-4" type="submit">
                      Transfer
                    </button>
                  </form>
                )}
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
};

export default ItemDetails;
