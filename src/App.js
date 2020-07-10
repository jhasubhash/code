import React from 'react';
import './App.css';
import CodeView from './views/CodeView.js';
import Navigation from './views/Navigation.js';

class App extends React.PureComponent { 

  constructor(props){
    super(props);
		this.state = {
			pageNum:0
		}
  }

  onPageChange = (e, page)=>{
		this.setState({ pageNum: page });
  }
  render() { 
    return (
      <div className="App">
        <CodeView codeId={this.props.codeId} pageNum={this.state.pageNum}/>
        <Navigation onPageChange={this.onPageChange}/>
      </div>
    );
  }
}

export default App;
