
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function App_Showcase_Section8() {
    return (
        <>
            <section className="section has-icon icon-bottom-left background-yellow spdtb">
                <div className="container">
                    <div className="heading heading-alway-dark align-center">
                        <h2 className="heading-title size-l">Trusted by Traders Everywhere</h2>
                    </div>
                    <div className="block-testimonial layout-02">
                        <div
                            className="testimonial-gallery thumbs-gallery"
                            style={{ backgroundImage: 'url("/assets/images/background-quote.png")' }}
                        >
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay]}
                            >
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "Olymp Trade gives me the tools I need to analyze the markets effectively. 
                                                The clean interface makes decision-making much faster"
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                    <div className="info">
                                                        <div className="name">Iruka Akuchi</div>
                                                        <div className="position">
                                                            Financial Analyst
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/mem-9.png" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "Running a business keeps me busy, but with Olymp Trade I can trade anywhere. 
                                                It’s efficient and fits my lifestyle perfectly."
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                    <div className="info">
                                                        <div className="name">Erika Mateo</div>
                                                        <div className="position">
                                                            Entrepreneur
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/mem-6.png" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "I love the flexibility. With Olymp Trade, I can design during the day and 
                                                trade in the evening without stress."
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                    <div className="info">
                                                        <div className="name">Anna Ly</div>
                                                        <div className="position">
                                                            Freelance
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/mem-5.png" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "Even though I’m not from a financial background, Olymp Trade makes 
                                                trading simple and easy to understand."
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                    <div className="info">
                                                        <div className="name">David kazak</div>
                                                        <div className="position">
                                                            Software Engineer
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/mem-7.png" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "Time management is everything in my job. Olymp Trade lets me trade quickly and effectively without 
                                                disrupting my daily schedule."
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                    <div className="info">
                                                        <div className="name">Roman ikum</div>
                                                        <div className="position">
                                                            Photographer
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/mem-3.png" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                            {/* <div className="view123">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <p>
                                                "Easy to follow but incredibly insightful tutorials. Makes
                                                learning new software and techniques and real pleasure
                                                everyday! Keep up the good work"
                                            </p>
                                            <div className="meta">
                                                <div className="author">
                                                <div className="info">
                                                    <div className="name">Iruka Akuchi</div>
                                                    <div className="position">
                                                    Assistant Post Order, Wipple
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control">
                                            <div className="swiper-slide">
                                                <div className="item zoom">
                                                    <img src="/assets/images/post-author-01.jpg" alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <img className="icon lg-hidden" src="/assets/images/asc6.png" alt="Image" />
            </section>

        </>
    )
}