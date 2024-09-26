export function Gallery({image, name}){
    return (
        <div className="image">
            <img src={image} alt={`${name} Album Image`}/>
        </div>
    );
}