import React, { ReactNode } from 'react';
import styles from './container.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<Props> = props => {
  return <div className={styles.container + ' ' + props.className}>{props.children}</div>;
};

export default Container;
