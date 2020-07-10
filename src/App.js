import React from 'react';
import './App.css';
import CodeView from './views/CodeView.js';
import Navigation from './views/Navigation.js';

class App extends React.PureComponent { 

  constructor(props){
    super(props);
		this.state = {
			pageNum:0,
      width: window.innerWidth,
		}
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  onPageChange = (e, page)=>{
		this.setState({ pageNum: page });
  }

  render() { 
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App">
        <CodeView codeId={this.props.codeId} pageNum={this.state.pageNum}/>
        { <Navigation onPageChange={this.onPageChange}/>}
      </div>
    );
  }
}

export default App;
