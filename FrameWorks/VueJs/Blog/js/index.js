window.onload = function () {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                entradas: [
                    {
                        id: '1',
                        titulo: 'Madrid',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum, unde cum molestiae est illum quam voluptatum magnam consequuntur distinctio asperiores quaerat quisquam ipsa placeat quibusdam, aliquam necessitatibus quasi iusto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, voluptates doloribus? Aliquam ea voluptate enim, unde doloribus culpa laborum provident expedita, distinctio dolores possimus. Doloremque adipisci sequi aliquam aperiam inventore.',
                        imagen: 'https://www.abc.es/Media/201801/11/madrid-201801111100_noticia_fotograma.jpg',
                        ubicacion:{
                            cuidad: "Madrid",
                            pais: "España",
                        },
                    },
                    {
                        id: '2',
                        titulo: 'Paris',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum, unde cum molestiae est illum quam voluptatum magnam consequuntur distinctio asperiores quaerat quisquam ipsa placeat quibusdam, aliquam necessitatibus quasi iusto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, voluptates doloribus? Aliquam ea voluptate enim, unde doloribus culpa laborum provident expedita, distinctio dolores possimus. Doloremque adipisci sequi aliquam aperiam inventore.',
                        imagen: 'https://www.abc.es/Media/201801/11/madrid-201801111100_noticia_fotograma.jpg',
                        ubicacion:{
                            cuidad: "Paris",
                            pais: "Francia",
                        },
                    },
                    {
                        id: '3',
                        titulo: 'Granada',
                        texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum, unde cum molestiae est illum quam voluptatum magnam consequuntur distinctio asperiores quaerat quisquam ipsa placeat quibusdam, aliquam necessitatibus quasi iusto. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, voluptates doloribus? Aliquam ea voluptate enim, unde doloribus culpa laborum provident expedita, distinctio dolores possimus. Doloremque adipisci sequi aliquam aperiam inventore.',
                        imagen: 'https://www.google.es',
                        ubicacion:{
                            cuidad: "Granada",
                            pais: "España",
                        },
                    }
                ],
                añadirEntrada: false,
                chulo: true,
                verEntradas: false,
            }
        },
        methods: {
            muestraNumeroArticulos() {
                return this.entradas.length
            },
            cambiarVisibilidad() {
                this.verEntradas = !this.verEntradas
            }
        },
        computed: {
            entradasDeEspana() {
                return this.entradas.filter((ent) => ent.ubicacion.pais=="España").length;
            }
        }
    }).mount('#app')
}