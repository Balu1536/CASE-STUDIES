import React from 'react';
import { usePreferencesStore } from '../store/preferencesStore';

export const PreferencesPanel = () => {
  const { theme, setTheme, fontSize, setFontSize } = usePreferencesStore();

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc' }}>
      <h3>User Preferences</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Theme: </label>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <div>
        <label>Font Size ({fontSize}px): </label>
        <input 
          type="range" 
          min="12" 
          max="24" 
          value={fontSize} 
          onChange={(e) => setFontSize(Number(e.target.value))} 
        />
      </div>
    </div>
  );
};