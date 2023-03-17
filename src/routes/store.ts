import {writable} from 'svelte/store';
import MiniCalcState from "../MiniCalcState";

export const screenDigitsWritable = writable('0');
export const calcState = MiniCalcState({screenSetter: screenDigitsWritable.set });
