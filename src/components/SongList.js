import React from 'react';
import SongDetail from "./SongList";

const SongList = ({songs}) => {

  const songNodes = songs.map(song => {
    return(
      <SongDetail songTitle={song.im} key={song.id.attributes["im:id"]}>{song["im:name"].label}</SongDetail>

    );
  });

  return(
    <div className="song-list">
      {songNodes}
    </div>
  )
}

export default SongList
