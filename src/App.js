import React from 'react';
import './App.css';
import CodeView from './views/CodeView.js';
import Navigation from './views/Navigation.js';

class App extends React.PureComponent { 

  constructor(props){
    super(props);
		this.state = {
      pageNum:1,
      pageCount:3,
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

  onPageCountChange = (count) =>{
		this.setState({ pageCount: count });
  }

  onPageChange = (e, page)=>{
		this.setState({ pageNum: page });
  }

  render() { 
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App">
        <CodeView codeId={this.props.codeId} pageNum={this.state.pageNum} 
                  onPageCountChange = {this.onPageCountChange}/>
        { <Navigation onPageChange={this.onPageChange} pageCount={this.state.pageCount}/>}
      </div>
    );
  }
}

export default App;
