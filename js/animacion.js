let hojas = "*";
[10,2].forEach(row => {
    Array(row).fill('').forEach((v,i) => {
        hojas += ([
            ...Array(9-i).fill("<span>-</span>"),
            ...Array(1+i*2).fill("<span class='rojo'>*</span>"),
            ...Array(9-i).fill("<span>-</span>"),

        ].join(''))

    })
})
document.getElementById("arbol").innerHTML = hojas;