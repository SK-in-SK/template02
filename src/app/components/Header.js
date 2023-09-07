"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "../assets/logo.svg";

function Header({ siteName, links }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [logoContainerHeight, setLogoContainerHeight] = useState(0);

  const logoContainerRef = useRef(null);

  useEffect(() => {
    if (logoContainerRef.current) {
      setLogoContainerHeight(logoContainerRef.current.clientHeight);
    }
  }, []);

  const handleMenuOpen = (index) => {
    setOpenMenuIndex(index);
  };

  const handleMenuClose = () => {
    setOpenMenuIndex(null);
  };

  const handleMenuItemClick = (event, link) => {
    handleMenuClose(); // Close the menu
    // Navigate programmatically only if there's an href
    if (link.href) {
      event.preventDefault(); // Prevent default anchor tag behavior
      window.location.href = link.href; // Navigate programmatically
    }
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["header_inner"]}>
        <div className={styles["logo_container"]}>
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={logoContainerHeight}
          />
        </div>
        <nav>
          {links.map((link, index) => (
            <div
              key={index}
              onMouseOver={() => handleMenuOpen(index)}
              onMouseLeave={handleMenuClose}
              className={styles["menu-item"]}
            >
              {link.sublinks ? (
                <button
                  aria-controls={`demo-positioned-menu-${index}`}
                  aria-haspopup="true"
                  aria-expanded={openMenuIndex === index ? "true" : undefined}
                >
                  {link.name}
                </button>
              ) : (
                <a
                  href={link.href}
                  className={styles["menu-link"]}
                  onClick={(event) => handleMenuItemClick(event, link)}
                >
                  {link.name}
                </a>
              )}
              {link.sublinks && openMenuIndex === index && (
                <div
                  id={`demo-positioned-menu-${index}`}
                  className={styles["submenu"]}
                  onMouseLeave={handleMenuClose}
                >
                  {link.sublinks.map((submenuItem, submenuIndex) => (
                    <div
                      key={submenuIndex}
                      className={styles["submenu-item"]}
                      onClick={(event) =>
                        handleMenuItemClick(event, submenuItem)
                      }
                    >
                      {submenuItem.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
