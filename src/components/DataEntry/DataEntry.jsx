function DataEntry({val, setV}) {
    return(
    <input type="text" onChange={(e)=>{setV(e.target.value)}} value={val}/>
    )
}

export default DataEntry