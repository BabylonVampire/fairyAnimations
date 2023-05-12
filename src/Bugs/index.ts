// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import Swarm from "./Swarm.js";

const spawnBugs = (amount: number, parent_element_class: string) => {
	const containers = document.getElementsByClassName(parent_element_class);

	for (let container of containers) {
		let swarm = new Swarm(amount, container);
		swarm.createSwarm();
	}
}

export { spawnBugs };