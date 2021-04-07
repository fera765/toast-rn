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
  <a href="#wrenchs-funcionalidades">Installation</a> &#xa0; | &#xa0;
  <a href="#sparkles-funcionalidades">Functionalities</a> &#xa0; | &#xa0;
  <a href="#rocket-tecnologias">Technology</a> &#xa0; | &#xa0;
  <a href="#star-example">Example</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765" target="_blank">Autor</a>
  <a href="#star-example">Example</a> &#xa0; | &#xa0;
  <a href="https://github.com/fera765/toast-rn/exemple" target="_blank">Demo</a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/fera765/toast-rn/main/demo/exemplo.gif" />
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
        direction: 'right',
        styleAnimation: 'bounce',
        duration: 6000,
        type: 'success',
      });
    }
    return (
      <View>
        <Text>
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

## :memo: Licença ##


This project is under MIT license. See the archive [LICENSE](LICENSE.md) for more details.


Done with :heart: per <a href="https://github.com/fera765" target="_blank">Mateus Conceição</a>

&#xa0;

<a href="#top">Back to the top
</a>
