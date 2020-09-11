class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        //Crea una persona
        let persona = { id, nombre, sala };
        //la agrega al arreglo
        this.personas.push(persona);

        return this.personas;

    }

    //La funcion filter regresa un nuevo arreglo, por lo cual yo necesito siempre la primera posicion
    getPersona(id) {
        //si no encuentra una persona, el filter va retornar undefine 
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;
    }

    getPersonas() {
        return this.personas;
    }


    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }


}

module.exports = {
    Usuarios
}