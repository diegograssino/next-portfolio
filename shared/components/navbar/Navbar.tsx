import React, { ReactNode } from 'react';
import styles from './navbar.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const Navbar: React.FC<Props> = props => {
  return (
    <nav className={styles.navbarContainer + ' ' + props.className}>{props.children}</nav>
  );
};

export default Navbar;
