// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import randomValue from "../utils/randomValue.js";

class Spark {
	container: Element;
	container_width: number;
	spark_shaking_length: number;
	shake_direction: number;
	length_of_life: number;
	length_of_flight: number;
	spark_offset: number;
	spark: HTMLDivElement;

	constructor(container: Element) {
		this.container = container;
		this.container_width = this.container.getBoundingClientRect().width;
		this.spark_shaking_length = Math.round(randomValue(5, 15));
		this.shake_direction = Math.round(randomValue(-1, 2))
		this.length_of_life = randomValue(100, 250);
		this.length_of_flight = randomValue(300, 500);
		this.spark_offset = randomValue(this.spark_shaking_length * 2, this.container_width - this.spark_shaking_length * 2)

		this.spark = document.createElement('div');
		this.spark.classList.add('spark');
		this.spark.style.position = 'absolute';
		this.spark.style.width = `1px`;
		this.spark.style.height = `${Math.round(this.length_of_flight / 8)}px`;
		this.spark.style.backgroundColor = '#ff7a45';
		this.spark.style.opacity = '0.8';
		this.spark.style.transformOrigin = 'bottom';
		this.spark.style.bottom = '0';
		this.spark.style.left = `${this.spark_offset}px`;
	}

	createSpark() {
		this.spark.animate([
			{
				backgroundColor: '#f67b2e',
				boxShadow: `-1px -1px 8px 2px #f67b2e`,
				transform: `translateX(0) translateY(0) rotate(0deg)`,
			},
			{
				backgroundColor: '#f67b2e',
				boxShadow: `-1px -1px 8px 2px #f67b2e`,
				transform: `translateX(${this.spark_shaking_length * this.shake_direction}px) translateY(-${Math.round(this.length_of_flight / 10)}px)`// rotate(${10 * shake_direction}deg)`
			},
			{
				backgroundColor: '#f46c17',
				boxShadow: `-1px -1px 8px 2px #f46c17`,
				transform: `translateX(${this.spark_shaking_length * this.shake_direction * (-1)}px) translateY(-${Math.round(this.length_of_flight / 5)}px)`// rotate(${10 * shake_direction * (-1)}deg)`
			},
			{
				transform: `translateX(${this.spark_shaking_length}px) translateY(-${Math.round(this.length_of_flight * 3 / 10)}px)`// rotate(${10 * shake_direction}deg)`
			},
			{
				backgroundColor: '#f46c17',
				boxShadow: `-1px -1px 6px 1px #f46c17`,
				transform: `translateX(0) translateY(-${Math.round(this.length_of_flight * 2 / 5)}px)`// rotate(0deg)`
			},
			{
				transform: `translateX(0) translateY(-${Math.round(this.length_of_flight / 2)}px)`// rotate(0deg)`
			},
			{
				opacity: '0.8',
				backgroundColor: '#f5670d',
				boxShadow: `-1px -1px 5px 1px #f5670d`,
				transform: `translateX(${this.spark_shaking_length * this.shake_direction}px) translateY(-${Math.round(this.length_of_flight * 3 / 5)}px)`// rotate(${10 * shake_direction}deg)`
			},
			{
				opacity: '0.5',
				transform: `translateX(${this.spark_shaking_length * this.shake_direction * (-1)}px) translateY(-${Math.round(this.length_of_flight * 7 / 10)}px)`// rotate(${10 * shake_direction * (-1)}deg)`
			},
			{
				opacity: '0.2',
				backgroundColor: '#ff6200',
				boxShadow: `-1px -1px 4px 1px #ff6200`,
				transform: `translateX(${this.spark_shaking_length * this.shake_direction}px) translateY(-${Math.round(this.length_of_flight * 4 / 5)}px)`// rotate(${10 * shake_direction}deg)`
			},
			{
				opacity: '0',
				backgroundColor: '#ff8a00',
				boxShadow: `-1px -1px 2px 1px #ff8a00`,
				transform: `translateX(0) translateY(-${Math.round(this.length_of_flight)}px)`// rotate(0deg)`
			}
		], this.length_of_life)
	}

	deleteSpark() {
		this.spark.remove()
	}

	sparkLifeCycle() {
		this.createSpark();
		setTimeout(() => {
			this.deleteSpark();
		}, this.length_of_life);
	}

	getSpark() {
		return this.spark;
	}
}

export default Spark;