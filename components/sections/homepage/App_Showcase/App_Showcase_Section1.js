export default function App_Showcase_Section1() {
    return (
        <>
            <section
                className="section background-overlay background-full pdt180 oveflow-hidden"
                style={{ backgroundImage: "url(/assets/images/hero-bg.jpg)" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="heading heading-alway-white wow animate__animated animate__fadeInLeft ">
                                <div className="heading-sub">Olymp Trade app</div>
                                <h2 className="heading-title size-xl">
                                    Your Trading Edge: <br /> Olymp Trade App
                                </h2>
                                <div className="heading-desc" data-wow animate__animated-delay="0.5s">
                                    Step into smarter trading with the Olymp Trade App and unlock new opportunities in every market move.
                                </div>
                            </div>

                            <div className="apps m220 wow animate__animated animate__fadeInLeft flex gap-3">
                                <a
                                    href="https://app.appsflyer.com/id6476768808?pid=affiliate&c=2237554&af_siteid=2237554&af_sub2=&af_sub1="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/assets/images/app-store.png" alt="App Store" />
                                </a>
                                <a
                                    href="https://app.appsflyer.com/com.olymptrade.flex?pid=affiliate&c=2237554&af_siteid=2237554&af_sub2=&af_sub1="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/assets/images/google-play.png" alt="Google Play" />
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="images align-right layout-01 lg-mt32">
                                <img
                                    className="img02 wow animate__animated animate__fadeInUp "
                                    src="/assets/images/hand-a.png"
                                    alt="olymptrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
