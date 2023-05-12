// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import Spark from "./Spark.js";

class Sparks {
	amount: number;
	container: Element;

	constructor(amount: number, container: Element) {
		this.amount = amount;
		this.container = container;
	}

	createSparks() {
		for (let i = 0; i < this.amount; ++i) {
			this.createSpark();
		}
	}

	createSpark() {
		let spark = new Spark(this.container);
		this.container.appendChild(spark.getSpark());
		spark.sparkLifeCycle();
		setTimeout(() => {
			this.createSpark();
		}, spark.length_of_life)
	}
}

export default Sparks;