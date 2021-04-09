<h1 align="center">React Native Toast</h1>

<p align="center">
  <img alt="Principal linguagem do projeto" src="https://img.shields.io/github/languages/top/fera765/toast-rn?color=56BEB8">

  <img alt="Quantidade de linguagens utilizadas" src="https://img.shields.io/github/languages/count/fera765/toast-rn?color=56BEB8">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/fera765/toast-rn?color=56BEB8">

  <img alt="Licença" src="https://img.shields.io/github/license/fera765/toast-rn?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/fera765/toast-rn?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/fera765/toast-rn?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/fera765/toast-rn?color=56BEB8" />
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  React Native Toast 🚀 Em construção...  🚧
</h4>

<hr> -->



<p align="center">
  <a href="#wrench-installation">Installation</a> &#xa0; | &#xa0;
  <a href="#sparkles-functionalities">Functionalities</a> &#xa0; | &#xa0;
  <a href="#blush-simple-documentation">Documentation</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="#rocket-technology">Technology</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765" target="_blank">Autor</a>
  &#xa0; | &#xa0;
  <a href="https://github.com/fera765/toast-rn/exemple" target="_blank">Demo</a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/fera765/toast-rn/main/demo/exemplo2.0.gif" />
</p>

<br>

## :wrench: Installation ##


```bash
# Install React Native Toast

yarn add toast-rn

# or if you prefer

npm install toast-rn



# Install React Native Vector Icons

yarn add react-native-vector-icons

# or if you prefer

npm install react-native-vector-icons

# Any problem with icons, try to link
react-native react-native-vector-icons
# or
npx react-native react-native-vector-icons

```

## :sparkles: Functionalities ##

:heavy_check_mark: Creating toast messages.

## :blush: Simple documentation ##

```ts

//By default visibleLine is true
visibleLine?: boolean = Enable duration line

//By default lineAnimation is ['#1f1f1f', '#ccc']
lineAnimation?: string[]; = Add color to visibleLine

//By default isBorder is true
isBorder?: boolean = Add or remove rounded corners

//By default type is 'info'
type?: string = Accepted > 'success' | 'error' | 'info' | 'warning';

//By default direction is 'right'
direction?: string = Accepted > 'left' | 'right' | 'top' | 'bottom';

//By default styleAnimation is 'bounce'
styleAnimation?: string = Accepted > 'bounce' | 'linear' | 'circle' | 'step0' | 'step1';

//Required to submit a title
title: string = The title of the toast;

description?: string = The description of toast;

//When using this field, the description field will not appear
listDescriptions?: String[] = Accepts a 'string' list;

//How long the message will stay on the screen
duration?: number = Accepts Type number;

```

## :star: Example ##

```javascript
  import React from 'react';
  import ToastProvider from 'toast-rn';
  import Home from './home';

  const App = () => {

    return (
      <ToastProvider>
        <Home />
      </ToastProvider>
    )
  };

  export default App;

  //home.tsx
  import React from 'react';
  import { View, Text } from 'react-native';

  import { useToast, IToastMessages } from 'toast-rn';

  //A type is available for use with typescript (IToastMessages)

  const Home = () => {
    const { addToast } = useToast();

    const handleAddNewMessage = () => {
      addToast({
        title: 'Success register',
        description: 'Ready now and to access your profile',
        //If you prefer a message list instead of a description
        // listDescriptions: [
        //   'Empty email field',
        //   'Empty password field',
        //   'Empty name field',
        // ],
        lineAnimation: ['#000', '#fff'],
        direction: 'right',
        styleAnimation: 'bounce',
        duration: 6, // 6 seconds
        type: 'success',
      });
    }
    return (
      <View>
        <Text>
          React Native Toast Message
        </Text>
      </View>
    )
  }

  export default Home;

```

## :rocket: Technology ##

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vector Icons](https://www.npmjs.com/package/react-native-vector-icons/)

## :memo: License ##


This project is under MIT license. See the archive [LICENSE](LICENSE.md) for more details.


Done with :heart: per <a href="https://github.com/fera765" target="_blank">Mateus Conceição</a>

&#xa0;

<a href="#top">Back to the top
</a>
