import Lines from "./Lines";
import { ILinesOptions } from "./lines-options.interface";

const runningText = (lines: string[], amount: number, class_name: string, options?: ILinesOptions) => {
	if (options) {
		if (
			options.shadow === undefined ||
			options.speedRange === undefined ||
			options.color === undefined ||
			options.fontSizeRange === undefined ||
			options.repeat === undefined
		) {
			console.error(
				'[!] Options not filled!\n' +
				'You have to fill it like this:\n' +
				'{shadow: true, speedRange: [2000, 4000], color: "#fff", fontSizeRange: [1, 2.5], repeat: true}'
			)
			return;
		}
	}

	const containers = document.getElementsByClassName(class_name);
	for (let container of containers) {
		let runningText = new Lines(amount, container, lines, options);
		runningText.createLines();
	}
};

export default runningText;