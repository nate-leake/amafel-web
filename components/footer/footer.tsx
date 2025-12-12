import Image from "next/image"
export default function Footer() {
    return (
        <div style={{ borderRadius:"20px", margin: "5px"}} className="ultrathick material">

            <p style={{textAlign:"center", fontWeight:"bold"}}>made by humans</p>
            <p style={{padding:"10px", fontSize:"small", textAlign: "center"}}>&copy;2025 Amafel. All rights reserved.</p>

            

            <Image
              priority

              src="https://drive.google.com/uc?export=download&id=1tyK8nzkMZ6AWLz004adYP7U8H4OcxyZ5"
              alt="Nate and Keebo"
              width={25}
              height={50}
              style={{ position: "fixed", left: "3px", bottom:"0px" }}
            />
        </div>
    )
}