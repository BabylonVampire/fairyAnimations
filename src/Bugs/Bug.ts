// Copyright (c) 2023 Tabalov Nikita
// This project is licensed under the MIT License
import randomValue from "../utils/randomValue.js";

class Bug {
	container: Element;
	bug_start_pos: [number, number];
	bug_middle_pos: [number, number];
	bug_end_pos: [number, number];
	length_of_life: number;
	bug: HTMLDivElement;
  
	constructor(container: Element) {
	  this.container = container;
	  this.bug_start_pos = [
		randomValue(0, this.container.getBoundingClientRect().width),
		randomValue(0, this.container.getBoundingClientRect().height),
	  ];
  
	  this.bug_middle_pos = [
		randomValue(0, this.container.getBoundingClientRect().width),
		randomValue(0, this.container.getBoundingClientRect().height),
	  ];
  
	  this.bug_end_pos = [
		randomValue(0, this.container.getBoundingClientRect().width),
		randomValue(0, container.getBoundingClientRect().height),
	  ];
	  
	  this.length_of_life = randomValue(5000, 8000);
	  this.bug = document.createElement("div");
	  this.bug.classList.add("bug");

	  this.bug.style.backgroundColor = '#fff';
	  this.bug.style.position = 'absolute';
	  this.bug.style.width = '1px';
	  this.bug.style.height = '1px';
	  this.bug.style.boxShadow = '0 0 0 0px #000;';
	  this.bug.style.animation = 'glowing_bug 3s ease-in-out infinite forwards';
	}
  
	spawnBug() {
	  this.bug.animate(
		[
		  {
			transform: `translate(${this.bug_start_pos[0]}px, ${this.bug_start_pos[1]}px)`,
		  },
		  {
			transform: `translate(${this.bug_middle_pos[0]}px, ${this.bug_middle_pos[1]}px)`,
		  },
		  {
			transform: `translate(${this.bug_end_pos[0]}px, ${this.bug_end_pos[1]}px)`,
		  },
		],
		this.length_of_life
	  );
	  this.bug.animate(
		[
			{
				boxShadow: '0 0 0 0 #000'
			},
			{
				boxShadow: '0 0 20px 10px #fffc1e, 0 0 30px #fff59f, 0 0 40px #ffffff, 0 0 50px #fff565, 0 0 60px #fff45f, 0 0 70px #fff348, 0 0 80px #efdf00'
			},
			{
				boxShadow: '0 0 0 0 #000'
			},
			{
				boxShadow: '0 0 20px 10px #fffc1e, 0 0 30px #fff59f, 0 0 40px #ffffff, 0 0 50px #fff565, 0 0 60px #fff45f, 0 0 70px #fff348, 0 0 80px #efdf00'
			},
		],
		this.length_of_life
	  )
	}
  
	deleteBug() {
	  this.bug.remove();
	}
  
	bugLifeCycle() {
	  this.spawnBug();
	  setTimeout(() => {
		this.deleteBug();
	  }, this.length_of_life);
	}
  
	getBug() {
	  return this.bug;
	}
  }

  export default Bug;