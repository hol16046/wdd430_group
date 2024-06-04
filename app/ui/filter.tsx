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
            </form>
            </div>
        </>
    )
}