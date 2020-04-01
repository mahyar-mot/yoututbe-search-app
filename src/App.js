import _ from 'lodash';
import React from 'react';
import './App.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'


const API_KEY = "AIzaSyAD2b-khJNmKynwis3UTEzGZqRNGJdajTA";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('surfboard');
  }

  itemClicked() {
    console.log('Clikced');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState( {videos: videos, selectedVideo: videos[0]} ) ;
    });
  }

  render() {
    const videoSearchDash = _.debounce( (term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <SearchBar onSearchInputChange={videoSearchDash} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={ selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
