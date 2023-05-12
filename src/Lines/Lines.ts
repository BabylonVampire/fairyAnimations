import Line from "./Line";
import { ILinesOptions } from "./lines-options.interface";

class Lines {

	amount: number;
	container: Element;
	lines: string[];
	options?: ILinesOptions;

	constructor(amount: number, container: Element, lines: string[], options?: ILinesOptions) {
		this.amount = amount;
		this.container = container;
		this.lines = lines;
		this.options = options;
	}

	createLines() {
		for (let i = 0; i < this.amount; ++i) {
			this.createLine();
		}
	}

	createLine() {
		let line = new Line(this.container, this.lines, this.options);
		this.container.appendChild(line.getLine());
		line.lineLifeCycle();
		if (this.options) {
			if (this.options?.repeat) {
				setTimeout(() => {
					this.createLine()
				}, line.length_of_life)
			}
		}
	}
}

export default Lines;