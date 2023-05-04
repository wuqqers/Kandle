import React, { Component, useRef } from 'react';
import ImageRes from '../assets/4.jpg';
import Video from '../assets/video.mp4';

export default class Banner extends Component {
  render() {
    function VideoPlayer() {
      const videoRef = useRef(null);
    


      return (
        <div style={{ position: 'relative' }}>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          </div>
        </div>
      );
    }

    return (
      <div>
        <VideoPlayer />
      </div>
    )
  }
}
