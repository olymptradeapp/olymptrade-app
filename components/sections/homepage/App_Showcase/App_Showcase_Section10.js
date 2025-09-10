"use client";
import { useState } from "react";
import Link from "next/link";

export default function App_Showcase_FAQ() {
  const [isActive, setIsActive] = useState({ status: false, key: "" });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" });
    } else {
      setIsActive({ status: true, key });
    }
  };

  return (
    <section className="section spdtb">
      <div className="container">
        <div className="heading align-center mb60">
          <h2 className="heading-title size-l">Frequently asked questions</h2>
          <p className="heading-desc">
            Haven’t got your answer?{" "}
            <Link href="https://olymptrade.com.in/contact-us/" title="Contact our support now">
              Contact our support now
            </Link>
          </p>
        </div>

        <div className="block-accordion enable layout-02">
          <div className="row">
            <div className="col-lg-6">
              <div
                className={
                  isActive.key === 1
                    ? "accordion-item background-grey is-active"
                    : "accordion-item background-grey"
                }
                onClick={() => handleToggle(1)}
              >
                <h4 className="title">Is the Olymptrade trading app easy to use?</h4>
                <div
                  className="content"
                  style={isActive.key === 1 ? { display: "block" } : { display: "none" }}
                >
                  <p>
                    Yes. The Olymptrade app was designed to make it easy for traders of all levels of 
                    experience to navigate the interface and use the various trading tools to their advantage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className={
                  isActive.key === 2
                    ? "accordion-item background-grey is-active"
                    : "accordion-item background-grey"
                }
                onClick={() => handleToggle(2)}
              >
                <h4 className="title">Does the app support Forex trading?</h4>
                <div
                  className="content"
                  style={isActive.key === 2 ? { display: "block" } : { display: "none" }}
                >
                  <p>
                    Yes. The Olymptrade app offers a Forex trading mode as well as other 
                    trading modes that meet the needs of users with various trading styles and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className={
                  isActive.key === 3
                    ? "accordion-item background-grey is-active"
                    : "accordion-item background-grey"
                }
                onClick={() => handleToggle(3)}
              >
                <h4 className="title">Are mobile trading apps safe?</h4>
                <div
                  className="content"
                  style={isActive.key === 3 ? { display: "block" } : { display: "none" }}
                >
                  <p>
                    The Olymptrade mobile app is. It's as safe as our desktop or web platforms and uses 
                    the same security protocols and features.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className={
                  isActive.key === 4
                    ? "accordion-item background-grey is-active"
                    : "accordion-item background-grey"
                }
                onClick={() => handleToggle(4)}
              >
                <h4 className="title">How can I start mobile trading?</h4>
                <div
                  className="content"
                  style={isActive.key === 4 ? { display: "block" } : { display: "none" }}
                >
                  <p>
                    It's easy. All you have to do is create a profile and make a deposit 
                    and you're ready to start trading.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}