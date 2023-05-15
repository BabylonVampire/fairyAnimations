// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import randomValue from "../utils/randomValue.js";
import { IOptions } from "./stars-options.interface";

class Star {
	container: Element;
	containerWidth: number;
	containerHeight: number;
	options?: IOptions;
	starPosition: [number, number];
	starSize: number;
	starSpeed: number;
	star: HTMLDivElement;

	starsSizeRange: [number, number];
	starsShiningSpeedRange: [number, number];
	starsColor: string;

	constructor(container: Element, options?: IOptions) {

		this.starsSizeRange = [1, 3];
		this.starsColor = '#fff';
		this.starsShiningSpeedRange = [1000, 2000];

		if (options) {
			this.starsSizeRange = options.starsSizeRange;
			this.starsColor = options.starsColor;
			this.starsShiningSpeedRange = options.starsShiningSpeedRange;
		}

		this.container = container;
		this.containerHeight = container.getBoundingClientRect().height;
		this.containerWidth = container.getBoundingClientRect().width;
		this.options = options;

		this.starPosition = [randomValue(0, this.containerWidth), randomValue(0, this.containerHeight)];
		this.starSize = randomValue(this.starsSizeRange[0], this.starsSizeRange[1]);
		this.starSpeed = randomValue(this.starsShiningSpeedRange[0], this.starsShiningSpeedRange[1]);

		this.star = document.createElement('div');
		this.star.classList.add('star');
	}

	setStar() {
		this.star.style.position = 'absolute';
		this.star.style.left = `${this.starPosition[0]}px`;
		this.star.style.top = `${this.starPosition[1]}px`;
		this.star.style.width = `${this.starSize}px`;
		this.star.style.height = `${this.starSize}px`;
		this.star.style.opacity = `${Math.random()}`
		this.star.style.backgroundColor = this.starsColor;

		setInterval(() => {
			this.star.animate([
				{
					boxShadow: `0 0 0 0 ${this.starsColor}`
				},
				{
					boxShadow: `0 0 ${randomValue(1, 4)}px 1px ${this.starsColor}`
				},
				{
					boxShadow: `0 0 0 0 ${this.starsColor}`
				}
			], this.starSpeed)
		}, this.starSpeed)

		this.container.appendChild(this.star);
	}
}

export default Star;