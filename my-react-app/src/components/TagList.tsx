import React, { useMemo } from 'react';

interface TagListProps {
  tags: string[];
  filter: string;
}

const TagListComponent = ({ tags, filter }: TagListProps) => {
  console.log('🔄 TagList rendered');

  const filteredTags = useMemo(() => {
    console.log('🧮 Filtering tags');
    return tags.filter((tag) =>
      tag.toLowerCase().includes(filter.toLowerCase())
    );
  }, [tags, filter]);

  return (
    <ul>
      {filteredTags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
  );
};


export const TagList = React.memo(TagListComponent);
