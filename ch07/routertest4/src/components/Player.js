import React from 'react';
import YoutubeReact from 'youtube-player-react'

const Player = (props) => {
    const id = props.match.params.id;
    const song = props.songs.find((song)=> song.id === parseInt(id,10));

    return (
        <div className="mt-5">
            <YoutubeReact videoid={song.youtube_link} 
                listType="search" autoplay={1} origin="http://localhost:3000" />
        </div>
    );
};

export default Player;