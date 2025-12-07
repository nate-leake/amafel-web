// components/Navbar.jsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function TabBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' }
  ];

  return (
    <div className="thin material" style={{ display: "inline-block", borderRadius: 15, margin: 10 }}>
      <div style={{ display: "flex" }} >
        <Image
          alt=""
          src="/favicons/apple-icon-180x180.png"
          width={50}
          height={50}
          style={{ borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }}
        />

        <div style={{
          padding: 10,
          height: 50,
          fontWeight: "bold",
        }}>

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