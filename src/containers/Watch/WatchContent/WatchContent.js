import React from 'react';
import {Video} from '../../../components/Video/Video';
import {VideoMetadata} from '../../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../../components/VideoInfoBox/VideoInfoBox';
import {Comments} from '../../Comments/Comments';
import {RelatedVideos} from '../../../components/RelatedVideos/RelatedVideos';
import './WatchContent.scss';

class WatchContent extends React.Component {
  render() {
    if (!this.props.videoId) {
      return <div/>
    }
    return (
      <div className='watch-grid'>
        <Video className='video' id={this.props.videoId}/>
        <VideoMetadata viewCount={1000}/>
        <VideoInfoBox/>
        <Comments amountComments={112499}/>
        <RelatedVideos className='relatedVideos'/>
      </div>
    );
  }
}

export default WatchContent
