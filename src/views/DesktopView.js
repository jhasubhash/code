import React from 'react'
import Iframe from 'react-iframe'
import clsx from 'clsx';
import './CodeView.css';

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function DeskTopView(prop) {
   return (
    <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <React.Fragment>
            <TransformComponent>
                <div className="IframeClass">
                <Iframe url={prop.src}
                    id="myId"
                    sandbox="allow-scripts allow-same-origin"
                    className={clsx("CodeView", prop.isMobile && 'IframeClassMobile')}
                    onLoad={() => prop.iFrameLoaded(true)}
                    position="relative"/>
                </div>
            </TransformComponent>
            </React.Fragment>
        )}
      </TransformWrapper>)
}

export default DeskTopView;