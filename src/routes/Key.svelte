<script lang="ts">
    import {calcState} from "./store";

    export let type: 'number' | 'period' | 'back-space' | 'clear' | 'times'| 'plus'| 'minus'| 'divide' | 'equal';
	export let value: string;
	import { screenDigitsWritable } from './store';
	let screenDigits = '0';
	const watch = screenDigitsWritable.subscribe((value) => {
		screenDigits = value;
	});
	let classString = '';
	$: {
		classString = 'key';
		classString += ` ${type}`;
		if (value === '0') {
			classString += ' zero';
		}
	}
</script>

<div class={classString} on:click={() => {
	switch (type) {
			case 'clear':
                calcState.clear();
				break;
			case 'back-space':
                calcState.backSpace();
				break;
			case 'number':
                calcState.enterNumber(value);
				break;
			case 'period':
                calcState.enterPeriod();
				break;
			case 'times':
                calcState.times();
				break;
			case 'plus':
                calcState.plus();
				break;
			case 'minus':
                calcState.minus();
				break;
			case 'divide':
                calcState.divide();
				break;
			case 'equal':
                calcState.evaluate();
				break;
			default:
				break;
		}
}}>{value}</div>

<style>
	.key {
        width: 300em;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
        font-size: 2em;
		border-radius: 25px;
		cursor: pointer;
        padding: 15px;
        color: #fff;
	}
	.key:hover {
		box-shadow: 0 4px 6px -1px rgb(255 255 255 / 0.1), 0 2px 4px -2px rgb(255 255 255 / 0.1);
	}
	.zero {
		width: 700em;
	}
	.back-space {
		background-color: #000000;
	}
	.clear {
		background-color: #c21313;
	}
	.times, .equal, .plus, .minus, .divide {
		background-color: #da6200;
	}

	.number, .period {
		background-color: #62605f;
	}
</style>
