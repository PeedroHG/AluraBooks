function Teste(tipo) {

  let lista = null

  if (tipo == 1) {
    lista = document.getElementById("lista");
  } else {
    lista = document.getElementById("lista2");
  }

  const computedStyle = window.getComputedStyle(lista);
  const displayValue = computedStyle.getPropertyValue("display");

  if (displayValue === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}

