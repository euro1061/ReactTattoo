function TattooPost({thumbnail, onTattooClose}) {
    const myStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <div className="">
            <div className="fixed top-0 left-0 bottom-0 right-0 w-screen h-screen bg-black bg-opacity-60 z-20" onClick={()=>onTattooClose()}></div>
            <div className="w-8/12 mx-auto text-white opacity-100 bg-gray-900 h-5/6 absolute p-2 shadow-2xl z-30" style={myStyle}>
                <button className="right-5 absolute top-5 text-2xl bg-red-700 focus:outline-none px-2 rounded-full hover:bg-red-500" onClick={()=>onTattooClose()}>X</button>
                <img src={thumbnail} className="w-full h-full" />
            </div>
        </div>
    );
}

export default TattooPost;