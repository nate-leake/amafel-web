import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="generalContainer section" style={{backgroundColor: "var(--olive-leaf)"}}>

        <div className="sectionHeader" style={{color: "var(--cornsilk)"}}>
          <p className="sectionTitle">Welcome to Amafel</p>
          <p className="sectionSubTitle">where humans help humans</p>
        </div>

        <div className="sectionBody" style={{color: "white"}}>
          <p>Here, we help each other overcome the challenges of life.</p>
        </div>

      </div>
    </div>
  );
}
