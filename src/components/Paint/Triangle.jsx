import { fabric } from 'fabric'

const Triangle = ( props ) => {
    const { canvas, colour, strokeColour, strokeSize } = props; // destructuring props
    
    // This is a little checker to see if a colour has been passed yet (colour default is "")
    // if a colour has not been passed, defaults to whatver colour is nominated below 
    let fillColour = 'blue'
    if (colour != ""){
        fillColour = colour 
    };

    const _handleAddTri = () => {
        const tri = new fabric.Triangle({
            width: 20,
            height: 30,
            fill: fillColour,
            strokeWidth: strokeSize,
            stroke: strokeColour,
            left: 50,
            top: 50
        });
        canvas.add(tri).renderAll()
        }
    
    return (
        <>
            <button className="add_button add_tri" onClick={ _handleAddTri } title="Add Triangle"></button>
        </>
    )
};

export default Triangle;