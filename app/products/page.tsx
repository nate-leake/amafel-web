import Image from "next/image";
import styles from "./products.module.css";

export default function Products() {
    return (
        <div>
            <div >


                <div className={`generalContainer ${styles.product}`} style={{backgroundColor: "color-mix(in srgb, var(--appPurple) 15%, transparent)"}}>
                    <div className={`${styles.productImage}`}>
                        <a href="https://mood-web-blue.vercel.app/" target="_blank">
                            <Image
                                priority
                                className="hidden dark:block"
                                src="https://drive.google.com/uc?export=download&id=1GtPkLbUXVA9HfQm-l73PGA9BPvwK8NVn"
                                alt="dark-mode-image"
                                width={180}
                                height={180}
                                style={{  }}
                            />
                            <Image
                                priority
                                className="block dark:hidden"
                                src="https://drive.google.com/uc?export=download&id=1q1_w2eLZ7qAt9ayTbF3aqjJ4YuoXvAuf"
                                alt="light-mode-image"
                                width={180}
                                height={180}
                                style={{  }}
                            />
                        </a>
                    </div>

                    <div className={`${styles.productTitle}`}>
                        <p>
                            (mood)
                        </p>
                    </div>

                    <div className={`${styles.productDesc}`}>
                        With security at its forefront, (mood) is designed to help you feel better faster. It helps identify what causes certain moods,
                        track large life events, and keep your goals on track.
                    </div>

                </div>




            </div>


        </div >
    )
}