import React from "react";
import "./Timer.css";
// import "./ControlButtons.css"

export default function Timer(props) {
	return (
		<div className="timer">
			<span className="digits">
				{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}: 
			</span> {/* this is show hourse */}
			<span className="digits">
				{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
			</span>  {/* this is show minute */}
			<span className="digits mili-sec">
				{("0" + ((props.time / 10) % 100)).slice(-2)}
			</span> {/* this is show second */}
		</div>
	);
}
