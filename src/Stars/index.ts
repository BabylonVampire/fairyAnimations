// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import Star from "./Star.js";
import { IOptions } from "./stars-options.interface";

const setSky = (amount: number, className: string, options?: IOptions) => {

	if (options) {
		if (
			options.starsColor === undefined ||
			options.starsShiningSpeedRange === undefined ||
			options.starsSizeRange === undefined
		) {
			console.error(
				'[!] Options not filled!\n' +
				'You have to fill it like this:\n' +
				'{	starsColor: "#fff", starsSizeRange: [1, 3], starsShiningSpeedRange: [1000, 2000], }'
			)
			return;
		}
	}

	const containers = document.getElementsByClassName(className);

	for (let container of containers) {
		for (let i = 0; i < amount; ++i) {
			let star = new Star(container, options);
			star.setStar();
		}
	}
}

export default setSky;