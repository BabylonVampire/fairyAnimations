// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import Bug from "./Bug.js";

class Swarm {

	amount: number;
	container: Element;

	constructor(amount: number, container: Element) {
		this.amount = amount;
		this.container = container;
	}

	createSwarm() {
		for (let i = 0; i < this.amount; ++i) {
			this.createBug();
		}
	}

	createBug() {
		let bug = new Bug(this.container);
		this.container.appendChild(bug.getBug());
		bug.bugLifeCycle();
		setTimeout(() => {
			this.createBug();
		}, bug.length_of_life)
	}
}

export default Swarm;