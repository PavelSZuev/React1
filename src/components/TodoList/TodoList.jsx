function ListOutput({arr}) {
    return(
        <div>{arr.map((item)=><li key={item.id}>{item.name}</li>)}</div>
    )
}

export default ListOutput