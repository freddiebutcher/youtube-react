import React from 'react';
// import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
// import {Video} from '../../components/Video/Video';
// import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';
// import {VideoInfoBox} from '../../components/VideoInfoBox/VideoInfoBox';
// import {Comments} from '../Comments/Comments';
// import {VideoPreview} from '../../components/VideoPreview/VideoPreview';
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api'
import WatchContent from './WatchContent/WatchContent';

export class Watch extends React.Component {
  render() {
    const videoId = this.getVideoId();
    return (
      <WatchContent videoId={videoId}/>
    );
  }
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchWatchContent();
    }
  }

componentDidUpdate(prevProps) {
  if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
    this.fetchWatchContent();
  }
}

fetchWatchContent() {
  const videoId = this.getVideoId();
  if(!videoId) {
    this.props.history.push('/');
  }
  this.props.fetchWatchDetails(videoId, this.props.channelId);
}

getVideoId() {
  const searchParams = new URLSearchParams(this.props.location.search);
  return searchParams.get('v');
}

}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({fetchWatchDetails}, dispatch);
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
