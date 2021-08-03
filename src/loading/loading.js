import Lottie from 'lottie-web';
import React, { useRef, useEffect } from 'react';

import './animation.css';

const Loading = () => {

    const ref = useRef('');

    useEffect(
        () => {
            Lottie.loadAnimation(
                {
                    container: ref.current,
                    loop: true,
                    renderer: 'svg',
                    animationData: require('./71010-cut-video.json')
                }
            );
        }
        , []
    );

    return (<div id="animation" ref={ref}></div>);
};

export default Loading;
