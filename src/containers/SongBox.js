import React, {Component} from 'react';
import SongDetail from "../components/SongDetail"

class SongBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
      // currentSong: null
    };

  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.results})
    });

    request.send();
  }

render(){
  return(
    <div className="songs-box">
      <h2>Top 20</h2>
      <SongDetail songs={this.state.songs}/>
    </div>
  )
}




}


export default SongBox;
