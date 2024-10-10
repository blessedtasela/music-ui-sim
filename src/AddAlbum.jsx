import { useState } from "react";
import { myAlbums } from "./data";

export function AddAlbum({ onSelect }) {

    const [albumTitle, setAlbumTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const trackOptions = [
        ["Sing O Breathen", "Praise His Name", "God's Mercy", "My Precious", "Perfect Love"],
        ["Grace Unfolding", "Shine Your Light", "Faithful Journey", "Endless Praise", "Lift My Soul"],
        ["Hope Renewed", "Joy in the Morning", "Love Unending", "Surrender All", "Forever Strong"],
        ["Eternal Grace", "Walk in Faith", "Divine Path", "Sacred Heart", "Holy Flame"]
    ];

    function getRandomTracks() {
        const randomTrackArray = trackOptions[Math.floor(Math.random() * trackOptions.length)]; // Select a random track array
        const shuffledTracks = randomTrackArray.sort(() => 0.5 - Math.random()); // Shuffle the tracks
        return shuffledTracks.slice(0, Math.floor(Math.random() * 2) + 4); // Return 4 or 5 random tracks
    }


    const newId = myAlbums.length + 1;
    const album = {
        id: newId,
        name: albumTitle,
        coverImg: imgUrl,
        tracks: getRandomTracks(),
    };

    const handleOnSelect = (album) => {

        if (albumTitle === '') {
            alert("Title must not be empty")
            return
        }
        if (imgUrl === '') {
            alert("Image url must not be empty")
            return
        }
        onSelect(album)
        setAlbumTitle('')
        setImgUrl('')
    }

    return (
        <div className="spacing">
            <input onChange={(e) => setAlbumTitle(e.target.value)} value={albumTitle} placeholder="Enter Album title" />
            <input onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} placeholder="Enter image url" />
            <button onClick={() => handleOnSelect(album)} style={{ cursor: 'pointer' }}>Add Album</button>
        </div>
    );

}