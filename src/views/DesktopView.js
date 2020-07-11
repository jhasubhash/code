import React from 'react'
import Iframe from 'react-iframe'
import './CodeView.css';

function DeskTopView(prop) {
   return <div className="IframeClass">
            <Iframe url={prop.src}
                id="myId"
                sandbox="allow-scripts allow-same-origin"
                className="CodeView"
                onLoad={() => prop.iFrameLoaded(true)}
                position="relative"/>
            </div>
}

export default DeskTopView;