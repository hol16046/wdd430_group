export default function Filter(){
    return (
        <>
            <h3>Filters</h3>
            <form>
                <h4>Categories</h4>
                <select name="" id="">
                    <option value="">Option 1</option>
                    <option value="">Option 1</option>
                </select>
                <h4>Prices</h4>
                <input type="range" min="0" max="300"/>
                <h4>Rating</h4>
                <input type="range" min="1" max="5"/>
            </form>
        </>
    )
}