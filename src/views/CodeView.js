import React from 'react';
import Iframe from 'react-iframe'
import './CodeView.css';

class CodeView extends React.PureComponent {
     render(){
        let codeId = this.props.pageNum; 
        let gistId = "ab55cb8921d8538dabad8d6d2b16afde";
        const param = "&bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=c&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=200px&ph=72px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false";
        let src="https://carbon.now.sh/embed/"+gistId+"?filename="+codeId+param;
       
        return (
        <React.Fragment>
            <div className="IframeClass">
            <Iframe url={src}
                id="myId"
                loading="loading..."
                sandbox="allow-scripts allow-same-origin"
                className="CodeView"
                display="initial"
                position="relative"/>
            </div>
        </React.Fragment>
        );
    }
}
export default CodeView;