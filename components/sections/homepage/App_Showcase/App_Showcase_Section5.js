
import { useState } from 'react';
export default function App_Showcase_Section5() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <section className="section spdt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 lg-order-2">
                            <div className="heading mb24">
                                <div className="heading-sub color-navy">awesome features</div>
                                <h2 className="heading-title size-l">Discover Forex with a trusted broker</h2>
                                <div className="heading-desc">We want you to succeed, so we offer a range of features to help you protect your money and maximize your profits.</div>
                            </div>
                            <div className="block-accordion enable active-first layout-03 pdr80">
                                <div className={isActive.key == 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(1)}>
                                    <h4 className="title">Pending order</h4>
                                    <div className="content" style={isActive.key == 1 ? { display: 'block' } : { display: 'none' }}><p>The platform will automatically open a trade at the price level or time you set.</p></div>

                                </div>
                                <div className={isActive.key == 2 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(2)}>
                                    <h4 className="title">Top up open trades</h4>
                                    <div className="content" style={isActive.key == 2 ? { display: 'block' } : { display: 'none' }}><p>Add more money to your open trade to increase its resilience to volatility.</p></div>
                                </div>
                                <div className={isActive.key == 3 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(3)}>
                                    <h4 className="title">Multiplier</h4>
                                    <div className="content" style={isActive.key == 3 ? { display: 'block' } : { display: 'none' }}><p>Utilize our capital to access higher trade values.</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 lg-order-1">
                            <div className="images layout-02 lg-mt32 lg-mb60">
                                <div className="inner">
                                    <img className="img01" src="/assets/images/shap1.png" alt="Image" />
                                    <img
                                        className="img05 wow animate__animated   animate__fadeInLeft"
                                        src="/assets/images/fx_01.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img06 wow animate__animated   animate__fadeInRight"
                                        src="/assets/images/hero-temp.png"
                                        alt="Image"
                                    />
                                    <img
                                        className="img04 lg-hidden"
                                        src="/assets/images/asc8.png"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}