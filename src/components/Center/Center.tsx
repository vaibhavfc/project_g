import React from 'react';
import './Center.scss';

const Center = (props: any) => {
  const { children } = props;
  return (
    <div className="center">
      {children}
    </div>
  );
};

export default Center;
