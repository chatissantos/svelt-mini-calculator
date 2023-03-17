import BLANC from "./BLANC";

export default function clear(setter: any) {
    setter(BLANC);
    return BLANC;
}
