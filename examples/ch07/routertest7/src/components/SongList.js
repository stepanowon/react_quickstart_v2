import React from 'react'
import { Link, Route } from 'react-router-dom';
import Player from './Player';

const SongList = (props) => {
    let list = props.songs.map((song)=> {
        let cn = "list-group-item";
        if (props.match.path + "/" + song.id === props.location.pathname) {
          cn += " list-group-item-secondary";
        }
        return (
            <li className={cn} key={song.id}>
                <Link to={`/songs/${song.id}`}>
                    {song.title} (musician: {song.musician})
                    <span className="float-right badge badge-secondary">
                        <i className="fa fa-play"></i>
                    </span>
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
            <Route path={`${props.match.path}/:id`}
                render={(routeProps)=> <Player {...routeProps} songs={props.songs} />} />
        </div>
    )
}
    
export default SongList;

