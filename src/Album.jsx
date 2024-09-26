export function Album({ album }) {
    return (
        <>
            <img alt={`${album.name} Album Photo`} src={album.coverImg} />
            {album.name}
        </>
    )
}
