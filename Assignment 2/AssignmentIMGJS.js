const img = document.getElementById("images");
for (let id = 5; id < 15; id++) {
  let a = document.createElement("img");
  a.src = `https://via.assets.so/movie.png?id=${id}&q=95&w=360&h=360&fit=fill`;
  img.appendChild(a);
}
