import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { ClipboardWithTooltip, Icon } from 'components/index';


storiesOf('Components/Clipboard', module)
  .add(
    'ClipboardWithTooltip',
    () => <SomeComponentWith_ClipboardWithTooltip />
  );


class SomeComponentWith_ClipboardWithTooltip extends React.Component {
  state = {};

  onCopy = _ => {
    this.setState({
      isCopied: true
    })
  };

  onCopyEnd = _ => {
    this.setState({
      isCopied: false
    })
  };

  render() {
    const { isCopied } = this.state;
    const cls = `ui-hasShadow ${isCopied ? 'ui-bg-green' : 'ui-bg-black'} ui-txt-white`;

    const
      toCopy = text('toCopy', 'Some Text for ClipboardWithTooltip'),
      tooltipContentBeforeCopy = text('tooltipContentBeforeCopy', 'Copy some url'),
      tooltipContentAfterCopy = text('tooltipContentAfterCopy', 'Copied!'),
      uiClassTooltipContent = text('uiClassTooltipContent', cls);

    const temp_uiClassTooltipContent = cls.replace(/ui-bg-[\w]+/, 'ui-bg-green'); // Changing class on onCopy

    return (
      <ClipboardWithTooltip
        toCopy={toCopy}
        tooltipContentBeforeCopy={tooltipContentBeforeCopy}
        tooltipContentAfterCopy={tooltipContentAfterCopy}
        uiClassTooltipContent={isCopied ? temp_uiClassTooltipContent : uiClassTooltipContent}
        onMouseLeave={_ => {
          console.log('Mouse left');
        }}
        onCopy={this.onCopy}
        onCopyEnd={this.onCopyEnd} // You can also skip this fn. and instead control style using .Clipboard--copied
      >
        Copy Icon
      </ClipboardWithTooltip>
    )
  }
}
