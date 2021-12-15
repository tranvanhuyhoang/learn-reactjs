import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Nhac Rap",
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/e/e/8/9/ee89d7f88c646d473b0e701a0e86b1a1.jpg',

        },
        {
            id: 2,
            name: "Nhac Trinh",
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/8/1/1/d811f216d13d11dd2c8c95f3c335d1b1.jpg',

        },
        {
            id: 3,
            name: "Nhac Bolero",
            thumnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/6/d/f/d/6dfd6170a22ca06dcb09216b712a3e25.jpg',

        },
    ];

    return (
        <div>
            <h3>Album của bạn</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;