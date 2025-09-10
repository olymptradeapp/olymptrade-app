"use client";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
    return (
        <Layout>
            <main id="main" className="site-main">
                <div className="site-content">
                    <div className="container">
                        <div className="row flex-align-c">
                            <div className="col-lg-6">
                                <div className="content-404">
                                    <h1>404 - Not Found!</h1>
                                    <p>
                                        This page could not be found. <br />
                                        Continue to the{" "}
                                        <a href="/" title="Homepage">
                                            Homepage
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="/assets/images/404.png" alt="404" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
