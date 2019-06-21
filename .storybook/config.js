import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";
import { withA11y } from "@storybook/addon-a11y";
import { withConsole } from "@storybook/addon-console";


addDecorator(centered);
addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(((storyFn, context) =>
  withConsole()(storyFn)(context)));


// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


/*
* Correct order for css is:
* 1. CSS(base.css) which is bundled by react-pixel-ui for UI Components
* 2. CSS for project specific overriding styles in base.css
* 3. CSS(ui.css) for additional css utilities provided by react-pixel-ui
*
* NOTE: Writing import for styl at end of this file ensures the 1st point.
*
* */
import './theme/custom.styl';
import 'styles/ui.styl';
