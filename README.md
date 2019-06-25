#### Library

##### Build:
```
npm run build
```

It generates following files in `dist/` directory

- **index.min.js**
	- Use like `import { SomeComponent } from 'react-pixel-ui/dist/index.min.js'`
	- Using like `import * as UI from 'react-pixel-ui/dist/index.min.js` won't help in tree-shaking. 
- **base.css**
	- Optional to include in your project  
- **ui.css**
  - Optional to include in your project
  
**There are 3 ways you can style components**
- Write your own component styles from scratch
- Copy+paste base.css and modify styles
- You can override the styles from base.css, in your own stylesheet, eg: `custom.css`

**Correct sequence of css imports is** (Check [.storybook/config.js](https://github.com/aseem2625/react-pixel-ui/blob/master/.storybook/config.js))
1. base.css 
2. custom.css
3. ui.css  

---

#### Docs

##### Development:
```
npm run storybook
```
Open http://localhost:6006/?path=/story/

##### Build: 
```
npm run build-storybook // To build storybook doc into docs/
```
Access storybook docs [here](http://aseem2625.github.io/react-pixel-ui)


