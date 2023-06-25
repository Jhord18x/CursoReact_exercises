import React, { useState } from 'react';

const ComponentCambioColor = () => {
  const [color, setColor] = useState('black');
  const [stopColorChange, setStopColorChange] = useState(false);

  function handleMouseEnter() {
    if (!stopColorChange) {
      const newColor = `rgb(${randomRgbValue()}, ${randomRgbValue()}, ${randomRgbValue()})`;
      setColor(newColor);
    }
  }

  function handleMouseLeave() {
    setColor('black');
  }

  /**
   * para detener los cambioss de color
   */
  function handleDoubleClick() {
    setStopColorChange(!stopColorChange);
  }

  /**
   * 
   * @returns one number. (1-256)
   */
  function randomRgbValue() {
    return Math.floor(Math.random() * 256);
  }

  return (
    <div
      style={{ backgroundColor: color, width: '255px', height: '255px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
    />
  );
}

export default ComponentCambioColor;
