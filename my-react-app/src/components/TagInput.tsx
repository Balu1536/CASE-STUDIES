import React, { useState } from 'react';

interface TagInputProps {
  onAddTag: (tag: string) => void;
}

const TagInputComponent = ({ onAddTag }: TagInputProps) => {
  console.log('🔄 TagInput rendered');

  const [value, setValue] = useState('');

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add tag"
      />
      <button
        onClick={() => {
          onAddTag(value);
          setValue('');
        }}
      >
        Add
      </button>
    </div>
  );
};


export const TagInput = React.memo(TagInputComponent);
