import { Album } from "./Album";

export function Albums({ albums, onSelect }) {

    let myAlbums = [];
    albums.forEach((album) => {
        myAlbums.push(
            <li key={crypto.randomUUID()}
                className="album-list"
                >
                <Album album={album} onSelect={onSelect} />
            </li>
        )
    });
    return (
        <>
            <h1>Select Album</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {
                    myAlbums
                }
            </ul>
        </>
    );
}