import React from 'react';
import Youtube from 'react-youtube'

const Player = (props) => {
    const id = props.match.params.id;
    const song = props.songs.find((song)=> song.id === parseInt(id,10));

    return (
        <div className="mt-5">
            <Youtube videoId={song.youtube_link} opts={{ width:320, height:240, playerVars: { autoplay:1 }}}/>
        </div>
    );
};

export default Player;