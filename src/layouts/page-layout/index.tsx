import React from 'react';
import * as styles from './styles.module.scss';
import { TPageLayout } from './types';
import { graphql, useStaticQuery, Script } from 'gatsby';

import DarkModeToggle from '@/components/sections/dark-toggle';
import { Theme } from '@/context';
import Header from '@/components/sections/header';

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
      <Header />
      <Theme.Consumer>
        {(value) => {
          return (
            <main className={styles.wrapper}>
              <header>
                TODO: use render props pattern for header to render toggle and
                mega navigation
                <DarkModeToggle />
              </header>
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
