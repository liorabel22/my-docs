import React, { type ReactNode } from 'react';
import styles from './styles.module.css';

type ColumnProps = {
  children: ReactNode;
};

export function Left({ children }: ColumnProps) {
  return <div className={styles.col}>{children}</div>;
}

export function Right({ children }: ColumnProps) {
  return <div className={styles.col}>{children}</div>;
}

type TwoColsProps = {
  children: ReactNode;
};

export default function TwoCols({ children }: TwoColsProps) {
  return <div className={styles.twoCols}>{children}</div>;
}