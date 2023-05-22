
function ColorBlock(prop){
    return(
        <div className="colorBlock" style={{'backgroundColor': prop.color}}>
            <p>{prop.color}</p>
        </div>
    )
}

export default ColorBlock
