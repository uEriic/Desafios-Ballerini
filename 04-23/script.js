let btn = document.getElementById("search");
btn.addEventListener("click", (txt) => {
  let input = document.getElementById("texto");
  txt = input.value;
  if (txt.length > 0) {
    window.open(`https://www.google.com/search?q=${txt}`, "_blank");
  } else {
    alert("Por favor informe algum texto para pesquisa.");
  }
});