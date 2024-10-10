export function Album({ album, onSelect }) {
    return (
        <div className="flex"  onClick={() => onSelect(album)}>
            <img alt={`${album.name} Album Photo`} src={album.coverImg} />
            <p>{album.name}</p>
        </div>
    )
}
