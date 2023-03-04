import React from "react";
import { graphql, Script, useStaticQuery } from "gatsby";

import DarkModeToggle from "@/components/sections/dark-toggle";
import Header from "@/components/sections/header";
import { Theme } from "@/context";

import { TPageLayout } from "./types";

import * as styles from "./styles.module.scss";

const PageLayout = ({ children, title }: TPageLayout) => {
  const { contentfulNavigation } = useStaticQuery(graphql`
    query MyNavigation {
      contentfulNavigation {
        id
        logo {
          title
        }
        navItem {
          ...fragmentNavigationItem
        }
      }
    }
  `);

  console.log(contentfulNavigation);
  return (
    <>
      <Theme.Consumer>
        {(value) => {
          return (
            <main className={styles.wrapper}>
              <Header
                logo={contentfulNavigation.logo}
                navItems={contentfulNavigation.navItem}
                toggleDarkMode={<DarkModeToggle />}
              />
              TODO: use render props pattern for header to render toggle and
              mega navigation
              <Script
                src={`//code.tidio.co/${process.env.TIDIO_ID}.js`}
                async // not dependent on the execution of another script
              />
              <div>
                <h1>{title}</h1>
                {children}
              </div>
            </main>
          );
        }}
      </Theme.Consumer>
    </>
  );
};

export default PageLayout;
