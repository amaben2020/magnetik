import LinkComponent from '@/components/elements/link';
import React, {useState} from 'react';
import * as styles from './styles.module.scss';

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  console.log('navItems', navItems);
  const [state, setState] = useState(false)

  const handleShowMenu = (id) => {}

  return (
    <>
    <header className={styles.header}>
      <ul>
      <h4>{logo?.title}</h4>
      {navItems.map((link) => (
       <li key={link.title}>
            <LinkComponent url={link.url} title={link.title} />
              
            <div  className={styles.dropdown}>
              {Array.isArray(link.links?.linkCategory)&& link.links?.linkCategory.map((linkCategory) => {
                return (
           
                     <LinkComponent key={linkCategory.url} url={linkCategory.url} title={linkCategory?.title}/> 
      
                )
              })}
                    </div>
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
