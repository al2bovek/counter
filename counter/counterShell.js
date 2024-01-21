import header from "./header/header.js";
import value from "./value/value.js";
export default function counterShell() {
    const counterShell = document.createElement('div');
    counterShell.className = "counterShell";
    counterShell.append(header, value);
    document.body.insertAdjacentElement("afterbegin", counterShell);
}