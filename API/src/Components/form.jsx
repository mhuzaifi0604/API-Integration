function Form({ handleSubmit, handleInputChange1, handleInputChange2, value1, value2 }) {
    return (
        <>
            <form onSubmit={handleSubmit} className="w-full relative">
                <input
                    type="number"
                    value={value1}
                    onChange={handleInputChange1}
                    placeholder="Enter Starting Index"
                    required
                    className="text-white border border-teal-500 bg-transparent m-2 h-10 rounded-lg w-2/5 ml-12"
                />
                <input
                    type="number"
                    value={value2}
                    onChange={handleInputChange2}
                    placeholder="Enter Ending Index"
                    required
                    className="text-white border border-teal-500 bg-transparent m-2 h-10 rounded-lg w-2/5 ml-12"
                />
                <button type="submit" className="rounded-lg text-teal-500 border border-teal-500 h-10 p-2 font-bold absolute right-10 top-2 hover:bg-teal-500 hover:text-black">Submit</button>
            </form>
        </>
    )
}
export default Form;