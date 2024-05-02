import React, { useState } from "react";
import style from "../styles/Pricing.module.scss";
import { Urbanist, DM_Sans } from "next/font/google";
import Image from "next/image";
import TickSvg from "../../public/mdi_tick.svg";
import Link from "next/link";
const Pricing = () => {
  const [isOpen, setOpen] = useState(false);

  const HandletoggleButton = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className={style.price}>
        {/* start heading section */}
        <div className="price_head">
          <div className="price_head__title">Simple,traffic-based pricing</div>
          <div className="price_head__subtitle">
            Sign-up for our 30-day trial no credit card required..
          </div>
        </div>
        {/* end heading section */}

        {/* start 2nd card section outside container */}
        <div className="price_content">
          {/* internal wrapper cover whole card  */}
          <div className="price_content__wrapper">
            {/* <div className="price_content__wrapper__hraboveCont"> */}
            <div className="price_content__wrapper__price">
              <div className="price_content__wrapper__price__page">
                <div className="pagview"> 100k PAGEVIEWS</div>
              </div>
            </div>
            <div className="price_content__wrapper__price__div">
              <div className="dollar">
                $16.00 <span>/month</span>
              </div>
            </div>
            {/* progress bar section */}
            <div className="price_content__wrapper__price_progressbar">
              <div className="progres">
                <input
                  type="range"
                  name="slider"
                  id="slider"
                  min="0"
                  max="100"
                />
              </div>
            </div>
            {/* end of progress bar */}

            <div className="price_content__wrapper_monthly-billing">
              <div className={`${isOpen ? "none" : "Bill"}`}>
                Monthly Billing
              </div>
              <div className="off-btn">
                <label className="switch">
                  <input type="checkbox" />
                  <span
                    onClick={HandletoggleButton}
                    className="slider round"
                  ></span>
                </label>
              </div>
              <div className={`${isOpen ? "yearlbillin" : "none"}`}>
                Yearly Billing
              </div>
              <div className="price_content__wrapper_monthly-billing__Discount-btn">
                <div className="dsbtn">
                  25% <span>discount</span>
                </div>
              </div>
            </div>

            {/* </div> */}
            {/* ....... */}
            <div className="price_content__wrapper_line">
              <hr />
            </div>
            <div className="price_content__wrapper_iconbtncont">
              <div className="price_content__wrapper_iconbtncont__benef">
                <div className="tickandt">
                  <div className="image">
                    <Image src={TickSvg} alt="Tick SVG" />
                  </div>
                  <div className="text">Unlimited websites</div>
                </div>
                <div className="tickandt">
                  <div className="image">
                    <Image src={TickSvg} alt="Tick SVG" />
                  </div>
                  <div className="text">100% data ownership</div>
                </div>

                <div className="tickandt">
                  <div className="image">
                    <Image src={TickSvg} alt="Tick SVG" />
                  </div>
                  <div className="text">Email reports </div>
                </div>
              </div>
              <div className="price_content__wrapper_iconbtncont_iconbtn">
                <Link href="#">
                  <div className="trialbtn">Start my trial</div>
                </Link>
              </div>
            </div>
          </div>
          {/* end of interal wrapper */}
        </div>
        {/* end of outside container */}
      </div>
    </>
  );
};

export default Pricing;
