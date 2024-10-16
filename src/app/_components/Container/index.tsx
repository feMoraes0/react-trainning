import React from 'react';
import styles from './style.module.scss';

type ContainerType = {
  children: Readonly<React.ReactNode>,
  fullwidth: Readonly<boolean>;
}

const Container = ({ children, fullwidth = false }: ContainerType) => (
  <div className={`${styles.container} ${fullwidth ? styles.containerFluid : ''}`}>
    { children }
  </div>
);

export default Container;
