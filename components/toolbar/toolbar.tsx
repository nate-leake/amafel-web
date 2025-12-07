import Link from "next/link";
import TabBar from "./tabbar";
import AccessoriesBar from "./accessoriesbar";

export default function ToolBar() {
    return (

        <div style={{
            position: "fixed",
            display: "flex",
            justifyContent: "space-between",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100

        }}>
            <TabBar />
            {/* <AccessoriesBar /> */}
        </div>

    );
}