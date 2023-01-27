import LinkComponent from '@/components/elements/link';
import React, {useState, useRef} from 'react';
import * as styles from './styles.module.scss';
import { useOnHoverOutside } from "../../../hooks/useOnHoverOutside";

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  console.log('navItems', navItems);
  const [state, setState] = useState(false)

  const handleShowMenu = (e) => {
e.target.style.background = 'blue'
  }

  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <>
    <header className={styles.header}>
      <ul ref={dropdownRef}>
      <h4>{logo?.title}</h4>
      {navItems.map((link, index) => (
       <li key={link.title} 
       onMouseOver={() => {
        if (index === 1) {
            setMenuDropDownOpen(true)
        }
      }}
       >
        <LinkComponent url={link.url} title={link.title} />
     {  <div  className={styles.dropdown}>
              {Array.isArray(link.links?.linkCategory)&& link.links?.linkCategory.map((linkCategory) => {
                return (
             <LinkComponent key={linkCategory.url} url={linkCategory.url} title={linkCategory?.title}/> 
                )
              })}
      </div>}
          </li>  
        ))}
      </ul>
      {/* TODO: Implement elastic search with modal for blog posts 🔍 */}
      {toggleDarkMode}
    </header>
    </>
  );
};

export default Header;
