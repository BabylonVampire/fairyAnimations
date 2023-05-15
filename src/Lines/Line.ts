// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import randomDoubleValue from "../utils/randomDoubleValue.js";
import randomValue from "../utils/randomValue.js";
import { ILinesOptions } from "./lines-options.interface";

class Line {
	container: Element;
	lines: string[];
	options?: ILinesOptions;
	shadow: boolean;
	repeat: boolean;
	speedRange: [number, number];
	fontSizeRange: [number, number];
	color: string;
	container_width: number
	container_height: number
	length_of_life: number;
	direction: number;
	font_size: number;
	lineDirection: string;
	line: HTMLDivElement;

	constructor(container: Element, lines: string[], options?: ILinesOptions) {
		this.container = container;
		this.lines = lines;
		this.options = options;

		this.shadow = true;
		this.speedRange = [2000, 4000];
		this.color = '#fff';
		this.fontSizeRange = [1, 2.5];
		this.repeat = true;
		this.lineDirection = "any";
		this.direction = 0;

		if (this.options) {
			this.shadow = this.options.shadow;
			this.speedRange = this.options.speedRange;
			this.color = this.options.color;
			this.fontSizeRange = this.options.fontSizeRange;
			this.repeat = this.options.repeat;
			this.lineDirection = this.options.lineDirection;
		}

		this.container_width = this.container.getBoundingClientRect().width;
		this.container_height = this.container.getBoundingClientRect().height;

		this.length_of_life = randomValue(this.speedRange[0], this.speedRange[1]);
		switch (this.lineDirection) {
			case 'vertical':
				this.direction = randomValue(1,3);
				break;
			case 'horizontal':
				this.direction = randomValue(3,5);
				break;
			case 'any':
				this.direction = randomValue(1,5);
				break;
			default:
				console.error("[!] Please, only modes 'vertical', 'horizontal' and 'any' are available!")
		}
		this.font_size = randomDoubleValue(this.fontSizeRange[0], this.fontSizeRange[1]);

		this.line = document.createElement('div');

		this.line.classList.add('line')

		this.line.innerHTML = this.lines[randomValue(0, this.lines.length)];

		this.line.style.position = 'absolute';
		this.line.style.userSelect = 'none';
		this.line.style.color = this.color;
		this.line.style.textShadow = this.shadow ? `${randomValue(-10, 10)}px ${randomValue(-10, 10)}px ${randomValue(5, 10)}px ${this.color}` : 'none';
		this.line.style.fontSize = `${this.font_size}rem`;
		this.line.style.opacity = '0';
	}

	createLine() {
		
		let offset;

		switch (this.direction) {
			case 1:
				offset = randomValue(0, this.container_width);
				this.line.style.writingMode = 'vertical-lr';
				this.line.style.textOrientation = 'upright';
				this.line.animate([
					{
						transform: `translate(${offset}px, 0)`,
						opacity: 0
					},
					{
						opacity: 1
					},
					{
						transform: `translate(${offset}px, ${this.container_height}px)`,
						opacity: 0
					}
				], this.length_of_life)
				break;
			case 2:
				offset = randomValue(0, this.container_width);
				this.line.style.writingMode = 'vertical-lr';
				this.line.style.textOrientation = 'upright';
				this.line.animate([
					{
						transform: `translate(${offset}px, ${this.container_height}px)`,
						opacity: 0
					},
					{
						opacity: 1
					},
					{
						transform: `translate(${offset}px, 0)`,
						opacity: 0
					}
				], this.length_of_life)
				break;
			case 3:
				offset = randomValue(0, this.container_height);
				this.line.animate([
					{
						transform: `translate(0, ${offset}px)`,
						opacity: 0
					},
					{
						opacity: 1
					},
					{
						transform: `translate(${this.container_width}px, ${offset}px)`,
						opacity: 0
					}
				], this.length_of_life)
				break;
			case 4:
				offset = randomValue(0, this.container_height);
				this.line.animate([
					{
						transform: `translate(${this.container_width}px, ${offset}px)`,
						opacity: 0
					},
					{
						opacity: 1
					},
					{
						transform: `translate(0, ${offset}px)`,
						opacity: 0
					}
				], this.length_of_life)
				break;
		}
	}

	deleteLine() {
		this.line.remove();
	}

	lineLifeCycle() {
		this.createLine();
		setTimeout(() => {
			this.deleteLine();
			if (this.repeat) {
				this.createLine();
			}
		}, this.length_of_life);
	}

	getLine() {
		return this.line;
	}
}

export default Line;