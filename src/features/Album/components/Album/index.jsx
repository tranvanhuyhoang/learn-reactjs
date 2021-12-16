import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired ,
};

Album.defaultProps = {
    album: {},
}

function Album({album}) {
    return (
        <div className='album'>
            <div className="album__thumnail">
                <img src={album.thumnailUrl} alt={album.thumnailUrl} />
            </div>
            <p className='album__name'>{album.name}</p>
        </div>
    );
}

export default Album;