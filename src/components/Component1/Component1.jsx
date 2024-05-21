import "./Component1.css"

function Component1 ({color, text}) {
    console.log(color, text)
    return (
        <div>
            <p className="C1">Компонент1</p>
            <p>{text}</p>
        </div>
    )
}

export default Component1