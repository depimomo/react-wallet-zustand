import React, { useEffect } from 'react';

import Color from '../components/Color';
import useColorStore, { selectColors, selectFetchColors } from '../store/color';

const ColorList = () => {
  const colors = useColorStore(selectColors);
  const fetchColors = useColorStore(selectFetchColors);

  useEffect(() => {
    if (colors.length == 0) {
      fetchColors();
    }
  }, []);

  return (
    <div className="color-list">
      {colors.map((item) => (
        <Color key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ColorList;
