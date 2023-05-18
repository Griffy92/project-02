import React, { useEffect } from "react";
import { Button } from '@mui/material';


const RemoveObject = ( props ) => {
	const { canvas } = props;

	const _HandleRemoveObject = () =>{
		if (canvas != null) {
			// canvas.remove(canvas.getActiveObject()) <-- This only does selected ojects
			canvas.getActiveObjects().forEach((obj) => {
				canvas.remove(obj);
			});
			canvas.discardActiveObject().renderAll();
		};
	};

////////// This removes all objects. Doesn't need selection
	const _HandleRemoveAllObjects = () => {
		if (canvas != null) {
			canvas.getObjects().forEach((obj) => {
				canvas.remove(obj);
			});
			canvas.discardActiveObject().renderAll();
		};
	};

	useEffect(() => {
		window.addEventListener('keyup', e => {
		if (
			e.key == 'Delete' ||
			e.key == 'Backspace'
			) {
				if (canvas != null) {
					canvas.getActiveObjects().forEach((obj) => {
						canvas.remove(obj)
					});
					canvas.discardActiveObject().renderAll()
				};
			};
		});
	}); 

	return (
		<>
			<Button className="add_button paint_common delete_all_button" onClick={_HandleRemoveAllObjects} title="Reset Canvas"></Button>
		</>
	);
};

export default RemoveObject;