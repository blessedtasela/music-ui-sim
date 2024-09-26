import { useState } from "react";
import { Albums } from "./Albums";
import { albums } from "./data";
import { Gallery } from "./Gallery";
import { Tracks } from "./Tracks";

export function Artist() {
    const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);

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

            <Albums
                albums={albums}
                onSelect={handleSelectedAlbum}
            />
        </section>
    );
}