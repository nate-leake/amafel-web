

export default function NotFound() {
    return (
        <div className="section">
            <div >
                <p className="sectionTitle" style={{ color: "var(--appRed" }}>404</p>
                <p className="sectionTitle" style={{ color: "var(--appRed" }}>page not found</p>
                <p className="sectionSubTitle">sorry, we couldn't find what you were looking for</p>
            </div>
            <div className="sectionBody">
                <p style={{ textAlign: "center" }}>
                    <a href="/" style={{ color: "#4C8DB8", textDecoration: "underline" }}>
                        go to our home page
                    </a>
                </p>
            </div>

        </div>
    )
}