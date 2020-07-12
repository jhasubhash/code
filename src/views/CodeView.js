import React from 'react';
import DeskTopView from './DesktopView.js'
import MobileView from './MobileView.js'

class CodeView extends React.PureComponent {
    constructor(props){
        super(props);
        this.gistId = "ab55cb8921d8538dabad8d6d2b16afde";
        this.codeMap = [];
        this.lastId = undefined;
        this.lastSrc = undefined;
		this.state = {
            hasFrameLoaded : false
        }
    }

    componentDidMount = () => {
        this.fetchContent();
    }

    fetchRawContent = (key, url)=>{
        fetch(url)
        .then(response => response.text()) 
        .then((dataStr) => {this.codeMap[key] = encodeURIComponent(encodeURIComponent(dataStr))});
    }

    parseJson = (data) =>{
        let obj = data.files;
        let fileCnt = 0;
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                this.fetchRawContent(key, obj[key].raw_url);
                fileCnt++;
            }
        }
        this.props.setManifest(obj[0].content);
        this.pageCnt = fileCnt-1;
        this.props.onPageCountChange(this.pageCnt);
    }

    fetchContent = () => {
        fetch('https://api.github.com/gists/'+this.gistId)
        .then(response => response.json())
        .then(data => {this.parseJson(data)});
    }

    getFrameSource = () => {
        let codeId = this.props.pageNum; 
        if(this.lastId === codeId)
            return this.lastSrc; 
        this.lastId = codeId;
        let fontSize = this.props.isMobile?"8px":"14px";
        let wControl = this.props.isMobile?false:true;
        const param1 = "bg=rgba(171%2C%20184%2C%20195%2C%201)&wc="+wControl+"&t=seti&wt=none&l=c&ds=true&dsyoff=10px&dsblur=18px&fs="+fontSize;
        //const param = "bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=c&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=200px&ph=72px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false";
        if(this.codeMap.length <= codeId)
            this.lastSrc = "https://carbon.now.sh/embed/"+this.gistId+"?filename="+codeId+"&"+param1;
        else
            this.lastSrc = "https://carbon.now.sh/embed/[id]?"+param1+"&code="+this.codeMap[codeId];
        return this.lastSrc;
    }

    iFrameLoaded = (loaded) => {
        this.setState({ hasFrameLoaded: loaded });
    }

    render(){
        let src = this.getFrameSource();
        return (
            <div>
            {<DeskTopView src={src} iFrameLoaded={this.iFrameLoaded} isMobile={this.props.isMobile}/>}
            {false && <MobileView/>}
            </div>
        );
    }
}
export default CodeView;