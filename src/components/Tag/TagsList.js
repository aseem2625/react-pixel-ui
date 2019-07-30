import React from 'react';
import { classList, prefixToClasses } from 'js-awesome-utils';

import './TagsList.styl';

export default function TagsList({ className, uiClass, children, ...restProps }) {
  return (
    <div
      {...restProps}
      className={
        classList(
          'TagsList',
          prefixToClasses('TagsList--', className),
          uiClass
        )}
    >
      {children}
    </div>
  );
}
