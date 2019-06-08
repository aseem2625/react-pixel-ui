import React from 'react';
import Tag from './Tag';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './TagsList.styl';

export default function TagsList({ className, tagsList }) {
  return (
    <div
      className={classList('TagsList', prefixToClasses('TagList--', className))}
    >
      {tagsList.map((t, ix) => (
        <Tag key={ix}>{t}</Tag>
      ))}
    </div>
  );
}
