import React from 'react';
import './App.css';
import CodeView from './views/CodeView.js';
import Navigation from './views/Navigation.js';
import ListView from './views/ListView.js';
class App extends React.PureComponent { 

  constructor(props){
    super(props);
		this.state = {
      pageNum:1,
      pageCount:3,
      width: window.innerWidth,
      manifest:[],
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

  onPageChange = (page)=>{
		this.setState({ pageNum: page });
  }

  setManifest = (data) => {
    let obj = JSON.parse(data);
    let arr = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        arr.push({"id":key,"name":obj[key].name,"tag":obj[key].tag})
      }
    }
    this.setState({ manifest: arr });
  }

  render() { 
    const { width } = this.state;
    const isMobile = width <= 500;
    return (
      <div className="App">
        <ListView manifest={this.state.manifest}
                  onPageChange={this.onPageChange}
                  pageNum={this.state.pageNum}/>
        <CodeView pageNum={this.state.pageNum} 
                  onPageCountChange = {this.onPageCountChange}
                  setManifest = {this.setManifest}/>
        { <Navigation pageNum={this.state.pageNum}
                  onPageChange={this.onPageChange} 
                  pageCount={this.state.pageCount}/>}
      </div>
    );
  }
}

export default App;
