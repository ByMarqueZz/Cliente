 class ListaLibros{

    constructor(){
        this.libros = []
        this.librosLeidos=0
        this.librosNoLeidos=0
        this.siguienteLibroLeer=undefined
        this.libroActual = undefined
        this.ultimoLibro = undefined
    }

    añadirLibro(libro){
        this.libros.push(libro)
        if (!libro.leido){
            this.libroActual = libro
        }else{
            this.ultimoLibro = libro
        }
        this.contadorLibros(libro);
        this.siguienteLibroLeer=this.siguienteLeer()
    }

    siguienteLeer(){
        for (let libro of this.libros){
            if(!libro.leido)
                return libro
            else
                return undefined
        }
    }

    contadorLibros(libro){
        if (libro.leido)
            this.librosLeidos++
        else  
            this.librosNoLeidos++  
    }

    finalizarLectura(){
        this.libroActual.leido = true
        this.libroActual.fecha = new Date()
        this.ultimoLibro = this.libroActual
        this.libroActual = this.siguienteLibroLeer
        this.siguienteLibroLeer = this.siguienteLeer(this.libros)
    }
}

class Libro{

    constructor(titulo,genero,autor) {
        this.titulo=titulo;
        this.genero=genero;
        this.autor=autor;
        this.leido = false
        this.fecha = undefined
    }

    setleido(){
        this.leido = true
    }

    setFecha(){
        this.fecha = new Date()
    }
}

export {ListaLibros,Libro}
