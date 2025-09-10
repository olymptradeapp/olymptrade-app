export default function App_Showcase_Section11() {
    return (
        <>
            <section className="section-banner layout-04">
                <div className="container">
                    <div
                        className="inner background-yellow"
                        style={{ backgroundImage: "url(/assets/images/asc12.png)" }}
                    >
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="banner-left spdtb pdl80 lg-pdl30 lg-pdr30">
                                    <div className="heading">
                                        <h2 className="heading-title size-xl">Trading Made Simple</h2>
                                        <div className="heading-desc">
                                            Download now and start your financial journey with just one app.
                                        </div>
                                    </div>

                                    {/* ✅ Tambahkan link ke App Store & Google Play */}
                                    <div className="apps m220 flex gap-3">
                                        <a
                                            href="https://apps.apple.com/app/id123456789"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/assets/images/app-store.png"
                                                alt="App Store"
                                            />
                                        </a>
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.example.app"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src="/assets/images/google-play.png"
                                                alt="Google Play"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="banner-right lg-hidden">
                                    <img
                                        className="wow animate__animated animate__fadeInRight"
                                        src="/assets/images/olymptrade_login.png"
                                        alt="Banner"
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
