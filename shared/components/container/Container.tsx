import React, { ReactNode } from 'react';
import styles from './container.module.scss';

type Props = {
  children: ReactNode;
};

const Container: React.FC<Props> = props => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Container;
