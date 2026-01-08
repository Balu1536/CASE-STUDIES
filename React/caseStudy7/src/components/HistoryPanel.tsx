import React from 'react';
import { useHistoryStore } from '../store/useHistory';

export const HistoryPanel: React.FC = () => {
  const { history, clearHistory } = useHistoryStore();

  return (
    <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '2px' }}>
      <div>
        <h3>Audit History</h3>
        <button 
          onClick={clearHistory}
          style={{ padding: '4px 8px', cursor: 'pointer' }}
        >
          Clear Logs
        </button>
      </div>

      {history.length === 0 ? (
        <p style={{ color: '#666' }}>No actions logged yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {history.map((entry, index) => (
            <li 
              key={`${entry.noteId}-${index}`} 
              style={{ 
                fontSize: '0.85rem', 
                borderBottom: '1px solid #eee', 
                padding: '8px 0' 
              }}
            >
              <strong>{entry.action.toUpperCase()}</strong> - Note: {entry.noteId}
              <div style={{ color: '#888', fontSize: '0.75rem' }}>
                {new Date(entry.timestamp).toLocaleTimeString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};