function CardTatto(props) {
    const { thumbnail, title,onTattooClick, id } = props;
    return (
        <div className="shadow-2xl cursor-pointer group rounded-xl relative overflow-hidden" onClick={()=>onTattooClick(id)}>
            <img className="w-full rounded-md transform group-hover:scale-125 transition duration-500" src={thumbnail} alt={title}/>
            <h3 className="text-2xl text-white p-3 absolute bottom-0 z-10">{title}</h3>
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black to-transparent rounded-md"></div>
        </div>
    );
}

export default CardTatto;
