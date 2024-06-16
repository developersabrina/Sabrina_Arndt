// def la clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    informacion() {
        console.log(`Vehículo: ${this.marca} ${this.modelo} ${this.año}`);
    }
}

// creamos la clase hija Auto que heredara de Vehiculo
class Auto extends Vehiculo {
    constructor(marca, modelo, año, color, precio) {
        super(marca, modelo, año);
        this.color = color;
        this.precio = precio;
    }

    informacion() {
        super.informacion();
        console.log(`Color: ${this.color}`);
        console.log(`Precio: $${this.precio}`);
    }
}

//  mostrar la información en la consola
const vehiculogen = new Vehiculo("Volkswagen", "Amarok", 2022);
console.log("informacion del auto generico :");
vehiculogen.informacion();

const automovil = new Auto("Ford", "Ranger", 2023, "Negro", 80000);  //precio en dolares :D
console.log("\nInformacion del auto :");
automovil.informacion();
