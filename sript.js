const n = 8
window.onload = () => {
    document.write(`<table></table>`);
    for (let j = 0; j < n; j++) {
        document.querySelector("table").innerHTML += `<tr>${
            Array.from({length: n}, (_, i) => `<td>${j} - ${i}</td>`).join("")
        }</tr>`;
    }
}
