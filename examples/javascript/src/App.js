import React, {useCallback} from 'react';
import { ScreenCapture } from 'react-screen-capture';

class App extends React.Component {
  state = {
    screenCapture: "",
    open: false,
    title: "gimmeatitle"
  };

  handleScreenCapture = screenCapture => {
    this.setState(
      {
        screenCapture
      },
      () => {
        screenCapture;
      }
    );
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = () => {
    console.log(this.state.title, this.state.screenCapture);
  };

  render() {
    const { screenCapture } = this.state;
    console.log(screenCapture);
    return (
      <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <div>
            <main>
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
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                  asperiores dignissimos delectus. Rerum, recusandae alias nobis suscipit
                  explicabo minus inventore dicta? Provident velit error minus nemo
                  asperiores dolorum possimus quod? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolorem sequi at sit nulla, tenetur cum quam harum
                  quisquam molestias voluptatum repellendus, autem in? Quia error
                  asperiores sed tempora nobis. Facilis!
                </p>
                <img src={this.state.screenCapture} alt="screen capture" />
              </div>
            </main>
          </div>
        )}
      </ScreenCapture>
    );
  }
};

export default App;
