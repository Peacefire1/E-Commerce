import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Sotre" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Show By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div className="form-check">
                  <input className="" type="checkbox" />
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Tags</h3>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
            </div>
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
