import React from 'react';
import { Link } from 'react-router-dom';
import { songs } from '../../routes'

const SongList = () => {
    let songlist = songs.map((song)=>{
        return (
            <li className="list-group-item" key={song.id}>
                <Link to={'/songs/'+song.id}> {song.title}</Link>
            </li>
        )
    })

    return (
        <div>
            <h2 className="m-5">Song List</h2>
            <ul className="list-group">
                {songlist}
            </ul>
        </div>
    );

};

export default SongList;