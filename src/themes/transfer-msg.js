import React, { Component } from "react";

import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import LiveAuctions from "../components/Auctions/AuctionsTwo";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";

class TransferMsg extends Component {
  render() {
    return (
      <div className="main">
        <Header />

        <section>
          <h1>NFT transfered</h1>
        </section>
        <Footer />
        <ModalSearch />
        <ModalMenu />
        <Scrollup />
      </div>
    );
  }
}

export default TransferMsg;
