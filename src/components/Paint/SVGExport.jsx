const SVGExport = ( props ) => {

    const { canvas } = props;

    const _handleExportSVG = () => {
        imgSVG = canvas.toSVG();
        // console.log(imgSVG);
        // add export code here
    }
   
    return (
        <>
            <button onClick={ _handleExportSVG }>SVG</button>
        </>
    );
};

export default SVGExport;