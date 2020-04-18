import React from 'react';
import { songs } from '../../routes'
import { Link } from 'react-router-dom';

const SongDetail = (props) => {
    const songone = songs.find((song)=>song.id === parseInt(props.match.params.id,10));
    if (!songone) {
        return (
            <div><h2>존재하지 않는 곡!!</h2></div>
        )
    } else {
        const full_link = `https://www.youtube.com/watch?v=${songone.youtube_link}`;
        return (
            <div className="m-5">
                <h2>{songone.title}</h2>
                <p>Original Musician : { songone.musician}</p>
                <p><a href={full_link} target="new">View Youtube</a></p>
                <Link to="/songs">Return SongList</Link>
            </div>
        );
    }

};

export default SongDetail;