export default function enterNumber(value: string, currentOutput: string, setter: any) {
    let newOutput: string;
    if (currentOutput === '0') {
        newOutput = value;
    } else {
        newOutput = `${currentOutput}${value}`;
    }
    setter(newOutput);
    return newOutput;
}
