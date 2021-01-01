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
    console.log(screenCapture);
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
              <img src={this.state.screenCapture} alt='react-screen-capture' />
              <p>
                {this.state.screenCapture && <button onClick={this.handleSave}>Download</button>}
              </p>
            </center>
          </div>
        )}
      </ScreenCapture>
    );
  }
};

export default App;
