import Image from "next/image";
import styles from "./home.module.css"

export default function Home() {
  return (
    <div>
      <div className="generalContainer roundTL roundBL roundTR roundBR" style={{ backgroundColor: "var(--olive-leaf)", marginBottom: "25px" }}>

        <div className="sectionHeader" style={{ color: "var(--cornsilk)" }}>
          <p className="sectionTitle">Welcome to Amafel</p>
          <p className="sectionSubTitle">Where humans help humans</p>
        </div>

      </div>

      <div className="generalContainer roundTL" style={{ 
        backgroundColor: "var(--yale-blue)", 
        color: "color-mix(in srgb, white 95%, transparent)"
        }}>
        <div className="sectionHeader">
          <p className="sectionTitle">Meet the founder & CEO</p>
          <p className="sectionSubTitle">Nate Leake</p>
        </div>

        <div className="sectionBody">
          <div className={`${styles.wrapper}`} style={{ flexDirection: "row-reverse" }}>


            <Image
              className={`${styles.leftAlignedImage}`}
              priority

              src="https://drive.google.com/uc?export=download&id=1y6Y9MHrqOHE_3Y9mnHBZDHRgxqYne-36"
              alt="Nate and Keebo"
              width={180}
              height={180}
              style={{ borderRadius: "7px" }}
            />


            <div className={`${styles.textContent} sectionBody`} style={{marginTop: "0", paddingTop: "0"}} >
              <p>Hi there, I'm Nate. Don't mind my cat in the photo. We'll get to her in a bit!</p>
              <p>
                I'm currently 22 years old and I have a vision for humanity. I want people to have access to mental health resources,
                financial education, and housing. I believe life is something we can (and should) all enjoy, not just survive. 
              </p>
              <p>
                I know this is an enormous goal. I know I can't do all of this alone. My plan: interdependence. We have to work together to create the world we want.
                Sometimes I have a hard time asking for help. If you have an idea, or are interested in helping me better humanity, please 
                let me know.
              </p>

              <p>

              </p>
            </div>
          </div>
        </div>


        <div className="generalContainer section" style={{ backgroundColor: "var(--cornsilk)", color: "black" }}>
          <p className="sectionSubTitle">The Cat</p>
          <div className={`${styles.wrapper}`}>
            <Image
              className={`${styles.leftAlignedImage}`}
              priority

              src="https://drive.google.com/uc?export=download&id=1W4EbleCMgjNDUhHaUt7iZQ2UPgxEODXG"
              alt="Picture a really pretty kitty"
              width={180}
              height={180}
              style={{ borderRadius: "7px" }}
            />

            <div className={`${styles.textContent}`}>
              <p>This is Keebo. No, she's not for sale. And yes, she took this picture herself! </p>
              <p>Keebo is very important!! </p>
              <p>She might even be sitting on my keyboard as you're reading this!</p>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
