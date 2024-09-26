import { Track } from "./Track";

export function Tracks({ tracks }) {
    return (
        <ol>
            {
                tracks.map((track) => (
                    <li key={track}>
                        <Track track={track} />
                    </li>
                ))
            }
        </ol>
    );
}