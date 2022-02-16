import React from 'react';
import './Start.scss';

export default () => {
  const handleStartClick = () => {
    console.log('start');
  };

  return (
    <div className="Start">
      <input
        className="Start__btn"
        type="button"
        value="开始游戏"
        onClick={handleStartClick}
      />
    </div>
  );
};
