import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};

AlbumList.default = {
    albumList: [],
};

function AlbumList(props) {
    const {albumList} = props;
    return (
        <div>
            <ul>
                {
                    albumList.length > 0 && albumList.map(item => (
                        <div className=''>
                            <Album album={item}/>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

export default AlbumList;