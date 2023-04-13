// Esta función permite al usuario ingresar los kilómetros por litro de su vehículo
const kmL = () => {
  let kmL = Number(document.getElementById("kmL").value);
  while (isNaN(kmL)) {
    alert("Ingrese un número");
    kmL = Number(document.getElementById("kmL").value);
  }
  console.log(kmL);
  return kmL;
};

// Esta función permite al usuario ingresar los kilómetros recorridos
const km = () => {
  let km = Number(document.getElementById("km").value);
  while (isNaN(km)) {
    alert("Ingrese un número");
    km = Number(document.getElementById("km").value);
  }
  console.log(km);
  return km;
};

// Esta función permite al usuario ingresar el precio del combustible
const precioCombustible = () => {
  let precioCombustible = Number(document.getElementById("precioCombustible").value
  );
  while (isNaN(precioCombustible)) {
    alert("Ingrese un número");
    precioCombustible = Number(document.getElementById("precioCombustible").value
    );
  }
  console.log(precioCombustible);
  return precioCombustible;
};

// Esta función calcula el costo del viaje
const costoViaje = () => {
    const kmValue = km();
    const kmLValue = kmL();
    const precioCombustibleValue = precioCombustible();
    let costoViaje = (kmValue / kmLValue) * precioCombustibleValue;
    console.log(costoViaje);
    document.getElementById("resultado").innerHTML = `El costo del viaje es: ${costoViaje}`;
    }