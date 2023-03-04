import React, { useRef } from "react";

import LinkComponent from "@/components/elements/link";
import useOutsideClick from "@/hooks/useOutsideClick";

import * as styles from "./styles.module.scss";

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  const dropdownRef = useRef(null);

  const { isActive, setIsActive, handleClick } = useOutsideClick(dropdownRef);

  return (
    <header className={styles.header}>
      <nav ref={dropdownRef}>
        <ul>
          <h4>{logo?.title}</h4>
          {navItems.map((link: any, index: any) => (
            <li key={link.title}>
              <button
                onMouseEnter={() => {
                  if (index === isActive && link.links) {
                    setIsActive(null);
                  } else {
                    handleClick(index);
                  }
                }}
                onClick={() => {
                  if (index === isActive && link.links) {
                    setIsActive(null);
                  } else {
                    handleClick(index);
                  }
                }}
              >
                {link.title}
              </button>
              {isActive === index && (
                <div
                  className={isActive ? styles.menuActive : styles.menuInActive}
                >
                  {Array.isArray(link.links?.linkCategory) &&
                    link.links?.linkCategory.map((linkCategory: any) => {
                      return (
                        <nav key={linkCategory.url}>
                          <LinkComponent
                            url={linkCategory.url}
                            title={linkCategory?.title}
                          />
                        </nav>
                      );
                    })}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* TODO: Implement elastic search with modal for blog posts 🔍 */}
      {toggleDarkMode}
    </header>
  );
};

export default Header;

// Task: create an edit event function that accepts (id, array and object) input
// ensure the data is read only
