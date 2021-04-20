// We need to tell TypeScript that when we write "import styles from './styles.scss'
// we mean to load a module (to look for a './styles.scss.d.ts').
// import React from 'react';

declare module '*.scss';
// declare module '*.svg' {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }
