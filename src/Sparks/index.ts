// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import Sparks from "./Sparks.js";

const spawnSparks = (amount: number, class_name: string) => {

	const containers = document.getElementsByClassName(class_name);

	for (let container of containers) {
		let sparks = new Sparks(amount, container);
		sparks.createSparks();
	}
}

export default spawnSparks;