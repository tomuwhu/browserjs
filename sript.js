const n = 8
window.onload = () => {
    document.write(`<table>${
        Array.from({length: n}, (_, i) => `
            <tr>${Array.from({length: n}, (_, j) => `
                <td>${i} - ${j}</td>
            `).join("")}</tr>
        `).join("")
    }</table>`)
}
