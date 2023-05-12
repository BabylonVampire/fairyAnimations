# Description
Library that adds dynamically generated animations.
# Animations
## Fireflies
Fills the element(s) of the specified class with fireflies that have a random flight path.

The function `spawnBugs()` takes the number of fireflies (as **number**) and the name of the html-element class (as **string**)

You are free to use this library both in vanilla JS (TS) and with **React**

*Vanilla example:*
```js
	import { spawnBugs } from 'fairy-anims/src';

	spawnBugs(10, 'bug_container');
```

*React example:*

```tsx
	import { FC } from 'react';
	import { spawnBugs } from 'fairy-anims/src';

	const Swarm: FC = () => {
		useEffect(() => {
			spawnBugs(10, 'bug_container')
		}, [])

		return(
			<div className="parent_element">
				<div className="bug_container" />
			<div>
		)
	}
```

Also, for correct display, the parent element must have such CSS styles:
```css
	.bug_container {
		position: relative;
		overflow: hidden; //Recomended
	}
```
And also place the container with fireflies at the same level of nesting in the DOM tree with the element needed to fill. In addition, the parent element must not have the following CSS styles to avoid rendering issues:

```css
	.parent_element {
		justify-content: center;
		align-items: center;
	}
```
*Preview*
![Fireflies](./previews/fireflies.gif)

## Sparks
Fills the element(s) of the specified class with sparks.

The function `spawnSparks()` takes the number of sparks (as **number**) and the name of the html-element class (as **string**)

You are free to use this library both in vanilla JS (TS) and with **React**

*Vanilla example:*
```js
	import { spawnSparks } from 'fairy-anims/src';

	spawnSparks(10, 'spark_container');
```

*React example:*

```tsx
	import { FC } from 'react';
	import { spawnSparks } from 'fairy-anims/src';

	const WitchBurning: FC = () => {
		useEffect(() => {
			spawnSparks(10, 'spark_container')
		}, [])

		return(
			<div className="parent_element">
				<div className="spark_container" />
			<div>
		)
	}
```

Also, for correct display, the parent element must have such CSS styles:
```css
	.spark_container {
		position: relative;
		overflow: hidden; //Recomended
	}
```
And also place the container with fireflies at the same level of nesting in the DOM tree with the element needed to fill. In addition, the parent element must not have the following CSS styles to avoid rendering issues:

```css
	.parent_element {
		justify-content: center;
		align-items: center;
	}
```
*Preview*
![Sparks](./previews/sparks.gif)

## Lines
Fills the screen with lines floating in different directions.

The function `runningLines()` takes:
1. Array of strings (**string[]**)
2. the number of lines (as **number**);
3. the name of the html-element class (as **string**);
4. options: 
	```ts
	{
		shadow: boolean; //drop shadow
		repeat: boolean; //repeat animation or play once
		speedRange: [number, number]; //time of animation in ms
		fontSizeRange: [number, number]; //in rem
		color: string; //font color
	}
	```

You are free to use this library both in vanilla JS (TS) and with **React**

*Vanilla example:*
```js
	import { runningLines } from 'fairy-anims/src';

	const options = {
		shadow: true; //drop shadow
		repeat: true; //repeat animation or play once
		speedRange: [2000, 4000]; //time of animation in ms
		fontSizeRange: [1, 2.5]; //in rem
		color: '#fff'; //font color
	}

	runningLines(['hello', 'world'], 10, 'lines_container', options);
```

*React example:*

```tsx
	import { FC } from 'react';
	import { runningLines } from 'fairy-anims/src';

	const RunningLines: FC = () => {

		const options = {
			shadow: true; //drop shadow
			repeat: true; //repeat animation or play once
			speedRange: [2000, 4000]; //time of animation in ms
			fontSizeRange: [1, 2.5]; //in rem
			color: '#fff'; //font color
		}

		useEffect(() => {
			runningLines(['hello', 'world'], 10, 'lines_container', options)
		}, [])

		return(
			<div className="parent_element">
				<div className="lines_container" />
			<div>
		)
	}
```

Also, for correct display, the parent element must have such CSS styles:
```css
	.lines_container {
		position: relative;
		overflow: hidden; //Recomended
	}
```
And also place the container with fireflies at the same level of nesting in the DOM tree with the element needed to fill. In addition, the parent element must not have the following CSS styles to avoid rendering issues:

```css
	.parent_element {
		justify-content: center;
		align-items: center;
	}
```
*Preview*
![Sparks](./previews/lines.gif)