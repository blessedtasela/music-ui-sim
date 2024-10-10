import { useState } from "react";
import { Albums } from "./Albums";
import { Gallery } from "./Gallery";
import { Tracks } from "./Tracks";
import { AddAlbum } from "./AddAlbum";
import { myAlbums } from "./data";

export function Artist() {

    const [updatedAlbums, setUpdatedALbums] = useState(myAlbums);
    const [selectedAlbum, setSelectedAlbum] = useState(updatedAlbums[0]);

    const handleUpdatedAlbums = (album) => {
        // The issue here is that you're mutating the myAlbums array directly, which doesn't trigger a re-render
        // because React doesn't detect the change. React checks for state changes using shallow comparisons, so
        // when the array is mutated in place, React doesn't recognize the array as having changed.
        const newAlbums = [...updatedAlbums, album]; // Create a new array. 
        setUpdatedALbums(newAlbums); // Update state with the new array
        console.log(newAlbums);
    }


    function handleSelectedAlbum(album) {
        setSelectedAlbum(album);
        console.log("Selected album:", album);
    }


    return (
        <section>
            <div className="main">
                <Gallery
                    image={selectedAlbum.coverImg}
                    name={selectedAlbum.name}
                />

                <Tracks
                    tracks={selectedAlbum.tracks}
                />
            </div>
            <AddAlbum onSelect={handleUpdatedAlbums}
            />
            <Albums
                albums={updatedAlbums}
                onSelect={handleSelectedAlbum}
            />
        </section>
    );
}