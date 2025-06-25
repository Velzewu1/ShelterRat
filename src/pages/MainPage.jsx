import React, { useEffect, useRef, useCallback } from 'react';
import GridScene from '../components/GridScene';

export default function MainPage() {
  return (
    <>
      {/* Background grid - will be behind everything */}
      <GridScene />
      
      {/* Your main content goes here */}
      <div className="relative z-10">
        {/* Your page content */}
        <h1>Your Main Content</h1>
        <p>This content will appear over the grid background</p>
      </div>
    </>
  );
}