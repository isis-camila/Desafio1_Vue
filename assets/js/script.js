const app = new Vue({
    el: '#app',

    data() {
        return {
            datos: [{
                    Nombre: "Alexis",
                    Apellido: "Urzua",
                    run: "18288282-3",
                    Nacimiento: "02-03-1998",
                    edad: 23
                },

                {
                    Nombre: "Jorge",
                    Apellido: "Herrera",
                    run: "18288282-k",
                    Nacimiento: "02-03-1997",
                    edad: 24
                },

                {
                    Nombre: "Ricardo",
                    Apellido: "Rojas",
                    run: "18288282-9",
                    Nacimiento: "02-03-1995",
                    edad: 26
                }
            ]
        }
    }
})