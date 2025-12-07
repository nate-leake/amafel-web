import { Span } from "next/dist/trace";
import styles from "./about.module.css"

export default function About() {
    return (
        <div>

            <div className={`${styles.mainGrid}`}>{/* mission & values */}
                <div className={`generalContainer section`} > {/* our mission */}
                    <div className={`sectionHeader`}>
                        <p className={`sectionTitle`}>our mission</p>
                        <p className={`sectionSubTitle`}>to increase the wellbeing of humanity</p>
                    </div>

                    <div className={`sectionBody`}>
                        <p>
                            We will focus on creating products that help people in vairous ways. 
                        </p>
                        <p>
                            All people are human and we should treat them as such.
                        </p>
                    </div>

                </div>

                <div className={`generalContainer section`}>{/* our values */}
                    <div className={`$ectionHeader`}>
                        <p className={`sectionTitle`}>our values</p>
                        <p className={`sectionSubTitle`}>this is what we beleive in</p>
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
                    <p className={`sectionTitle`}>our story</p>
                    <p className={`sectionSubTitle`}>
                        Therapy is a journey you take at your own pace.
                    </p>
                </div>


                <div className={`sectionBody`}>
                    <p>
                        Where were my emotions at any given moment?
                        What significant things happened in my life in the last week? What coping tools do I have to use in this hard moment?
                        Does that coping tool even work for me? What progress am I making?
                    </p>

                    <p>
                        This business was started to help people answer those kinds of questions.
                        While I was in therapy for depression and anxiety I noticed that I had no sense of progress.
                        I knew I felt better on some days and worse on others, but I couldn’t pinpoint why.
                        What was making good days good and bad days bad?
                    </p>

                    <p>
                        I realized I could keep track of impactful tools, tricks, or even if the sun was shining.
                        Maybe if I wrote down the things that made me feel happier, calmer, or more relaxed I could try those things when I was anxious, overwhelmed, or depressed.
                        I could also write down things that didn’t help or feel right when I was struggling.
                        Then, I could go back to my therapist and report what worked and what didn’t.
                        I could also track my mood each day and see what kind of trends there were.
                    </p>

                    <p>
                        Luckily for me, I already knew some coding.
                        I decided to start working on an app to do all of this tracking.
                        Then I could see graphs, add coping tools, give myself reminders, maybe a journaling feature.
                        I was full of excitement and ideas.
                    </p>

                    <p>
                        I didn’t realize it at the time, but this was the start of my business.
                        This was also a large part of my healing process.
                        I had a project to work on that I knew could make a difference in my life and maybe others’.
                        That gave me a sense of direction.
                        And as I added more features I could see the progress I was making in therapy even though my app didn’t actually change how I was doing therapy.
                    </p>

                    <p>
                        I still have a lot of ideas of how to make this app more useful.
                        Making a product that will help people is my passion.
                    </p>
                </div>


            </div>

        </div>
    );
}