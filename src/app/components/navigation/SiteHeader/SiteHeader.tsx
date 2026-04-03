"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

const navItems = [
  { label: "About Jessie", href: { pathname: "/", hash: "about-jessie" } },
  { label: "Corporate Events", href: "/corporate_events" },
  { label: "Team Building", href: "/team_building" },
  { label: "Keynote Speaker", href: "/keynote_speaker" },
  { label: "Small Group Events", href: "/small_group_events" },
  { label: "Let's Collaborate", href: "/contact" },
];

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((prev) => !prev);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brandBlock} onClick={closeMobileMenu}>
          <span className={styles.brandTitle}>CUSTOM COURSES</span>
          <span className={styles.brandSubTitle}>by Jessie Krebs</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.mobileMenuWrapper}>
          <button
            type="button"
            className={styles.mobileMenuButton}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-site-nav"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={toggleMobileMenu}
          >
            <span className={styles.mobileMenuIcon} aria-hidden="true">
              <span className={styles.mobileMenuBar} />
              <span className={styles.mobileMenuBar} />
              <span className={styles.mobileMenuBar} />
            </span>
          </button>

          {isMobileMenuOpen ? (
            <div className={styles.mobileMenuPanel}>
              <nav id="mobile-site-nav" className={styles.mobileNav} aria-label="Mobile Primary">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}