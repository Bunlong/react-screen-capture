<p align="center">
  ⭐️ Please support us by giving a star! Thanks! ⭐️
</p>

# react-screen-capture

A tiny React library allows you to take a snapshot of the webpage's screen or part of the screen.

### 💻 Live [Demo](https://codesandbox.io/s/react-screen-capture-i9f4d)

## 🎁 Features

* Easy to use
* Compatible with both JavaScript and TypeScript
* Take a snapshot of the webpage's screen or part of the screen

## 🔧 Install

react-screen-capture is available on npm. It can be installed with the following command:

```
npm install react-screen-capture --save
```

react-screen-capture is available on yarn as well. It can be installed with the following command:

```
yarn add react-screen-capture
```

## 🔰 Callbacks

<table>
  <tr>
    <th>Callback</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>onStartCapture</td>
    <td><code>() => null</code></td>
    <td>To start capture webpage's screen.</td>
  </tr>
  <tr>
    <td>onEndCapture</td>
    <td><code>(base64Source: string) => null</code></td>
    <td>To end capture webpage's screen and get base64 source.</td>
  </tr>
</table>

## 💡 Usage

```jsx
import React from 'react';
import { ScreenCapture } from 'react-screen-capture';

class App extends React.Component {
  state = {
    screenCapture: '',
  };

  handleScreenCapture = screenCapture => {
    this.setState({screenCapture});
  };

  handleSave = () => {
    const screenCaptureSource = this.state.screenCapture;
    const downloadLink = document.createElement('a');
    const fileName = 'react-screen-capture.png';

    downloadLink.href = screenCaptureSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  render() {
    const { screenCapture } = this.state;

    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <div>
            <button onClick={onStartCapture}>Capture</button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              distinctio exercitationem a tempore delectus ducimus necessitatibus
              dolor voluptatum aut est quaerat aspernatur, vero quod aperiam odio.
              Exercitationem distinctio in voluptates?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut molestiae
              deserunt voluptas, labore a expedita error eligendi sunt fugit, nesciunt
              ullam corrupti quas natus, officia rerum? Officia cum amet quidem.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, iusto
              repellat quae quos in rerum sunt obcaecati provident placeat hic saepe
              possimus eaque repellendus consequuntur quisquam nihil, sit ullam
              ratione.
            </p>
            <center>
              <img src={screenCapture} alt='react-screen-capture' />
              <p>
                {screenCapture && <button onClick={this.handleSave}>Download</button>}
              </p>
            </center>
          </div>
        )}
      </ScreenCapture>
    );
  }
};

export default App;
```

## ❗ Issues

If you think any of the `react-screen-capture` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `react-screen-capture` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
