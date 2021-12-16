import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};

AlbumList.defaultProps = {
    albumList: [],
};

function AlbumList(props) {
    const {albumList} = props;
    return (
        <div>
            <ul className='album-list'>
                {
                    albumList.length > 0 && albumList.map(item => (
                        <li>
                            <Album album={item}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default AlbumList;