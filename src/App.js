import React from 'react';
import FeedPage from './components/FeedPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'hyeri'
    }
  }

  setName(name) {
    this.setState({
      name:name
    })
  }

  render() {

    const html = [1,2,3].forEach(ele => (
        <p>ele</p>
      ));

    return (
      <div style={{margin:'30px 30px'}}>
        <FeedPage name={this.state.name} setName={this.setName.bind(this)}/>
        {html}
      </div>
  );
}
}

export default App;
