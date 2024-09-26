import { useState } from "react";
import { Album } from "./Album";

export function Albums({ albums, onSelect }) {

    return (
        <>
            <h1>Select Album</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {
                    albums.map((album) => (
                        <li key={album.name}
                            className="album-list"
                            onClick={() => onSelect(album)} >
                            <Album album={album} />
                        </li>
                    ))
                }
            </ul>
        </>
    );
}