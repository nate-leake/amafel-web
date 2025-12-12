import { Span } from "next/dist/trace";
import styles from "./about.module.css"

export default function About() {
    return (
        <div>

            <div className={`${styles.mainGrid}`}>{/* mission & values */}
                <div className={`generalContainer section`} > {/* our mission */}
                    <div className={`sectionHeader`}>
                        <p className={`sectionTitle`}>Our Mission</p>
                        <p className={`sectionSubTitle`}>To increase the wellbeing of humanity</p>
                    </div>

                    <div className={`sectionBody`}>
                        <p>
                            We're focused on creating products that help people in various ways.
                            Our first product is (mood). A mental health app to track tool usage, mood, goals, and progress.
                            You can find more information about (mood) on our products page.
                        </p>
                        <p>
                            All people are human and we should treat them as such.
                        </p>
                    </div>

                </div>

                <div className={`generalContainer section`}>{/* our values */}
                    <div className={`$sectionHeader`}>
                        <p className={`sectionTitle`}>Our Values</p>
                        <p className={`sectionSubTitle`}>This is what we believe in</p>
                    </div>

                    <div className={`sectionBody`}>

                        <div className={`${styles.chipSet}`}>
                            <div id={`${styles.chip1}`} className={`${styles.chip}`} >
                                <p>Equity</p>
                            </div>

                            <div id={`${styles.chip2}`} className={`${styles.chip}`}>
                                <p>Interdependence</p>
                            </div>

                            <div id={`${styles.chip3}`} className={`${styles.chip}`}>
                                <p>Recognition</p>
                            </div>

                            <div id={`${styles.chip4}`} className={`${styles.chip}`}>
                                <p>Altruism</p>
                            </div>

                            <div id={`${styles.chip5}`} className={`${styles.chip}`}>
                                <p>Compassion</p>
                            </div>
                        </div>



                    </div>

                </div>

            </div>





            <div className={`generalContainer section`}> {/* our story */}
                <div className={`sectionHeader`}>
                    <p className={`sectionTitle`}>Our Story</p>
                    <p className={`sectionSubTitle`}>
                        Everyone deserves a life they enjoy
                    </p>
                </div>


                <div className={`sectionBody`}>
                    <p>
                        This business was started by Nate Leake as a hobby. Growing up, Nate had several ideas for new products.
                        This time, the product actually had some ground under it.
                    </p>

                    <p>
                        The original product idea was (mood) which is still under development. This idea came from Nate's journey in therapy.
                        He had an idea to create a mood tracking app to show him his progress as he underwent therapy for anxiety and depression.
                        Luckily, he already knew some coding skills to get a basic app up and running. But why stop with just himself? If this app worked for him, why not allow everyone else to use it?
                        This was just the beginning though. It turns out starting a business is no easy feat. Especially for a first time entrepreneur.
                    </p>

                    <p>
                        After Nate created a basic version of the app (mood), he wanted to learn how to actually distribute it. How do you start a business?
                        Maybe it was a good idea to attend a business class. That is when Nate found <a className="styledLink" href="https://bizstarts.com/" target="_blank">BizStarts</a>, a local company in Milwaukee WI.
                    </p>

                    <p>

                    </p>

                    <p>

                    </p>

                    <p>

                    </ p>
                </div>


            </div>

        </div>
    );
}