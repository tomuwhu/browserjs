const n = 8
window.onload = () => {
    document.getElementById("table").innerHTML = (`<table>${
        Array.from({length: n}, (_, i) => `
            <tr>${Array.from({length: n}, (_, j) => `
                <td>${i} - ${j}</td>
            `).join("")}</tr>
        `).join("")
    }</table>`)
}
