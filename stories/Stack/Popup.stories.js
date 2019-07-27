import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { freezeRoot, unfreezeRoot } from '../_story-helpers/utils';

import { PopupsContainer, openPopup, Button} from 'components/index';

storiesOf('Components/Stack', module)
  .add(
    'Popup',
    () => {
      const
        className = text("className", 'class1 class2'),
        uiClass = text("uiClass", ''),
        title = text("title", 'Modal 1'),
        showCross = boolean("showCross", false),
        enableEscPress = boolean("enableEscPress", true),
        enableOutsideClick = boolean("enableOutsideClick", true);

      return (
        <div>
          {/* All modals share common instance. PopupsContainer to be present at top level of React app */}
          <PopupsContainer
            onShow={freezeRoot}
            onHide={unfreezeRoot}
          />

          {/* Open a modal */}
          <Button
            onClick={_ =>
              openPopup({
                uiClass,
                className,
                title,
                content: close => (
                  <Modal1 close={close} data="modal 1 props" />
                ),
                onClose: action('Popup closed'),
                showCross,
                enableEscPress,
                enableOutsideClick,
              })
            }
          >
            Open Modal
          </Button>
        </div>
      );
    }
  );


class Modal1 extends React.PureComponent {
  render() {
    const { close, data } = this.props;

    return (
      <div>
        <br />
        Content in Modal1
        <br />
        {data}
        <br />
        <Button className="primary" onClick={close}>
          Close Popup
        </Button>
        <Button
          className="primary"
          onClick={_ =>
            openPopup({
              title: 'Dummy Modal2',
              showCross: true,
              content: close => (
                <Modal2 close={close} />
              ),
            })
          }
        >
          Open Other Modal
        </Button>
      </div>
    );
  }
}

/* Modal with outsideClick and escPress disabled */
class Modal2 extends React.PureComponent {
  render() {
    const { close } = this.props;

    return (
      <div>
        <br />
        <Button className="primary" onClick={close}>
          Close Modal
        </Button>
      </div>
    );
  }
}
