import CardTatto from "./CardTatto";
import tattoos from "../data/tattoos";
import TattooPost from "./TattooPost";
import { useState } from "react";
import Search from './Search';

function ContentBox() {
    const [selectedTattoo, setSelectedTattoo] = useState(null);
    const [searchText, setSearchText] = useState('');

    let tattooPost = null;
    if (!!selectedTattoo) {
        tattooPost = <TattooPost thumbnail={selectedTattoo.thumbnailBig} onTattooClose={onTattooClose} />
    }

    function onTattooClick(id) {
        setSelectedTattoo(tattoos[id]);
    }

    function onTattooClose() {
        setSelectedTattoo(null);
    }

    return (
        <div>
            <Search setSearchText={setSearchText} searchText={searchText} />
            <div className="grid grid-cols-2 gap-2 mx-auto mt-5 mb-5 w-3/6">
                {tattoos.filter((tattoo) => {
                    return tattoo.title.includes(searchText);
                }).map((tattoo, index) =>
                    <CardTatto
                        key={index}
                        id={index}
                        thumbnail={tattoo.thumbnail}
                        title={tattoo.title}
                        onTattooClick={onTattooClick}
                    />)}

                {tattooPost}
            </div>
        </div>
    );
}

export default ContentBox;