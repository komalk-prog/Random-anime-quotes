async function munction() {
  var response = await fetch("https://animechan.vercel.app/api/random");
  var data = await response.json();

  let aName = document.getElementById("name");
  let aQuote = document.getElementById("quote");
  let aChar = document.getElementById("char");

  aName.innerHTML = data.anime;
  aQuote.innerHTML = data.quote;
  aChar.innerHTML = data.character;
}
munction();
