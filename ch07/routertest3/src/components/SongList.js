import React from 'react'
import { Link } from 'react-router-dom';

const SongList = (props) => {
    let list = props.songs.map((song)=> {
        return (
            <li className="list-group-item" key={song.id}>
                <Link to={`/songs/${song.id}`}>
                    {song.title} (original musician : {song.musician})
                </Link>
            </li>
        )
    });

    return (
        <div>
            <h2 className="m-5">Song List</h2>
            <ul className="list-group">
              {list}
            </ul>
        </div>
    )
}
    
export default SongList;

