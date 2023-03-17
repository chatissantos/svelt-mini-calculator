export default function backSpace(currentOutput: string, setter: any) {
    const l = currentOutput.length;
    let newOutput: string;
    if (l <= 1) {
        newOutput = '0';
    } else {
        newOutput = currentOutput.slice(0, l - 1);
    }
    setter(newOutput);
    return newOutput;
}
