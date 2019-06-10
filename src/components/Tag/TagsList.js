import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './TagsList.styl';

export default function TagsList({ className, children }) {
  return (
    <div
      className={classList('TagsList', prefixToClasses('TagsList--', className))}
    >
      {children}
    </div>
  );
}
