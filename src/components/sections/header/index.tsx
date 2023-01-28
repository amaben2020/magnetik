import LinkComponent from '@/components/elements/link';
import React, {useState, useRef} from 'react';
import * as styles from './styles.module.scss';
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";
import { useEffect } from "react";
 

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  const [isActive, setIsActive] = useState(null)

  const handleClick = (index) => {
     if (index > 0){
      setIsActive(index)
     }
  } 
 
  const dropdownRef = useRef(null)

  const handleClose = () => {
    if (isActive){
        setIsActive(null)
    }
  }

  useEffect(() => {
    const onClick = (e) => {
    if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
      setIsActive(null);
       }
    }

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
   
  }, [isActive])

  return (
 
    <header className={styles.header}>
      <nav ref={dropdownRef}>
      <ul>
      <h4>{logo?.title}</h4>
      {navItems.map((link, index) => (
       <li key={link.title}>
         <button onClick={() => {
          if (index === isActive) {
          setIsActive(null)
              }else{
          handleClick(index)
          }}}>{link.title}</button>
         {isActive === index && <div className={isActive ? styles.menuActive: styles.menuInActive} >
              { Array.isArray(link.links?.linkCategory)&& link.links?.linkCategory.map((linkCategory, index) => {
                return (
                <nav >
                  <LinkComponent key={linkCategory.url} url={linkCategory.url} title={linkCategory?.title}/> 
                </nav>
                )})}
        </div>}
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
