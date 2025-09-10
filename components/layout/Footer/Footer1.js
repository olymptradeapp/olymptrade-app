import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                {/* About */}
                                <div className="col-lg-3">
                                    <div className="footer-item footer-about">
                                        <div className="logo">
                                            <Link href="/">
                                                <Image
                                                    src="/assets/images/logo_white.png" //
                                                    alt="olymptrade Logo"
                                                    width={200} // 
                                                    height={200}
                                                    priority
                                                />
                                            </Link>
                                        </div>
                                        <p>
                                            Join Olymp Trade and experience a simple, 
                                            secure, and innovative way to trade
                                        </p>
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="col-lg-3">
                                    <div className="footer-item footer-menu">
                                        <h6>Download App</h6>
                                        <ul>
                                            <li><Link href="https://app.appsflyer.com/com.olymptrade.flex?pid=affiliate&c=2237554&af_siteid=2237554&af_sub2=&af_sub1=">Android</Link></li>
                                            <li><Link href="https://app.appsflyer.com/id6476768808?pid=affiliate&c=2237554&af_siteid=2237554&af_sub2=&af_sub1=">Apple</Link></li>
                                            <li><Link href="https://trkmad.com/2237554">Mobile Web</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Resources */}
                                <div className="col-lg-3">
                                    <div className="footer-item footer-menu">
                                        <h6>Company</h6>
                                        <ul>
                                            <li><Link href="https://olymptrade.com.in/about-us/">About</Link></li>
                                            <li><Link href="https://olymptrade.com.in/contact-us/">Contacts</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Social Media */}
                                <div className="col-lg-3">
                                    <div className="footer-item footer-menu">
                                        <h6>Social Media</h6>
                                        <ul>
                                            <li><Link href="https://www.facebook.com/olymptradecom/">Facebook</Link></li>
                                            <li><Link href="https://www.youtube.com/c/OLYMPTRADEGlobal/">Youtube</Link></li>
                                            <li><Link href="https://www.instagram.com/olympglobal/">Instagram</Link></li>
                                            <li><Link href="https://t.me/+mjmgYNZBLQIwMmQ0">Telegram</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Risk Warning */}
                <div className="footer-risk bg-gray-100 py-4">
                    <div className="container">
                        <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto">
                            <strong>Risk Warning:</strong> Trading financial instruments such as Forex,
                            CFDs, and cryptocurrencies carries a high level of risk and may not be suitable
                            for all investors. You may lose part or all of your invested capital.
                            Do not trade with money you cannot afford to lose. Please ensure you
                            fully understand the risks and seek independent advice if necessary.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner flex flex-content-sb flex-align-c">
                            <div className="copyright">
                                © 2025 Olymptrade. All rights reserved
                            </div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

