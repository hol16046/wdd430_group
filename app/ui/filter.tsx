export default function Filter(){
    return (
        <><div className="grid rounded-lg border-4 p-4">
            <h3>Filters</h3>
            <form>
                <label htmlFor="Categories">Categories</label>
                <select name="Categories" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 2</option>
                </select>
                <label htmlFor="Categories">Prices</label>
                <input name="priceFilter" type="range" min="0" max="300"/>
                <label htmlFor="ratingFilter">Rating</label>
                <input name="ratingFilter" type="range" min="1" max="5"/>
            </form>
            </div>
        </>
    )
}