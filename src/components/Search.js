function Search({searchText, setSearchText}) {
    return (
        <div className="mx-auto mt-8 w-3/6">
            <input type="text" value={searchText} onChange={(event)=> setSearchText(event.target.value)} className="px-3 py-1 w-full border-gray-400 rounded-md border" placeholder="ค้นหา.." />
        </div>
    );
}

export default Search;