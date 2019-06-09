import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { PopupsContainer, openPopup, Button} from '../../dist/index.min';

storiesOf('Components/Stack', module)
  .add(
    'Popup',
    () => {
      const enableOutsideClick = boolean("Enable outside click", true),
      enableEscPress = boolean("Enable esc press", true),
      className = text("Classes", 'class1 class2'),
      showCross = boolean("Show cross", false);

      return (
        <div>
          {/* All modals share common instance. PopupsContainer to be present at top level of React app */}
          <PopupsContainer />

          {/* Opening a modal */}
          <Button
            onClick={_ =>
              openPopup({
                title: 'Modal 1',
                content: close => (
                  <Modal1 close={close} data="modal 1 props" />
                ),
                showCross,
                enableOutsideClick,
                enableEscPress,
                className
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
        <Button isPrimary onClick={close}>
          Close Popup
        </Button>
        <Button
          isPrimary
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
        <Button isPrimary onClick={close}>
          Close Modal
        </Button>
      </div>
    );
  }
}
