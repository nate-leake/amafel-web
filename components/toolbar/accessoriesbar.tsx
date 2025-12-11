"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';



export default function AccessoriesBar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Log in', href: '/auth/login' },
    ];

    return (
        <div className="thin material" style={{ display: "inline-block", borderRadius: 15, margin: 10, justifyContent: "center" }}>
            <div style={{ display: "flex" }} >

                <div style={{
                    padding: 10,
                    height: 50,
                    fontWeight: "bold",
                }}>

                    {/* <Link className="marginHorizontal5" href={"/users"}>log in</Link> */}

                    <nav>
                        <ul className='toolBarNavSection'>
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href; // Or pathname.startsWith(link.href) for sub-routes

                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={isActive ? "marginHorizontal5 activeTabItem" : "marginHorizontal5"}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}