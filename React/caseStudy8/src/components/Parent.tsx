import React, { useCallback, useState } from 'react';
import { TagList } from './TagList';
import { TagInput } from './TagInput';

export const Parent = () => {
  console.log('🔄 Parent rendered');

  const [tags, setTags] = useState(['React', 'JavaScript', 'TypeScript']);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0); // unrelated state

  const handleAddTag = useCallback((tag: string) => {
    if (tag.trim()) {
      setTags((prev) => [...prev, tag]);
    }
  }, []);

  return (
    <div>
      <h2>Tag Manager</h2>

      <input
        placeholder="Filter tags"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <TagInput onAddTag={handleAddTag} />
      <TagList tags={tags} filter={filter} />

      <hr />

      <button onClick={() => setCount((c) => c + 1)}>
        Increment Counter ({count})
      </button>
    </div>
  );
};
