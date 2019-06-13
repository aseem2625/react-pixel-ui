import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import centered from "@storybook/addon-centered/react";
import { withA11y } from "@storybook/addon-a11y";
import { withConsole } from "@storybook/addon-console";

import 'styles/index.styl';
import './index.css';


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
