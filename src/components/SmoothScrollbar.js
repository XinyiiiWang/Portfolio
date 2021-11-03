import React, { useRef } from 'react';
import ScrollBar from 'react-smooth-scrollbar';

export default function SmoothScrollbar({ prop }) {
  const ref = useRef(null);
  return (
    <ScrollBar ref={ref} damping=".09">
      {prop}
    </ScrollBar>
  );
}
