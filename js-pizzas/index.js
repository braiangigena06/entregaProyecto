const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 550,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

const idImpar = pizzas.filter((element) => {
  return element.id % 2 != 0;
})

idImpar.forEach((element) => {
  console.log("La " + element.nombre + " tiene id Impar");
})

const pizzaBarata = pizzas.filter((element) => {
  return element.precio < 600;
})

if (pizzaBarata.length > 0){
  pizzaBarata.forEach((element) => {
    console.log("La " + element.nombre + " vale menos de $600");
  })
} else{
  console.log("Ninguna pizza vale menos de $600");
};

const nombrePrecio = pizzas.map((element) => {
  return "La " + element.nombre + " tiene un valor de $" + element.precio;
})

console.log(nombrePrecio);

pizzas.forEach((element) => {
  const ingrediente = element.ingredientes.toString(",");
  console.log("La "+ element.nombre + " contiene "+ ingrediente);
})