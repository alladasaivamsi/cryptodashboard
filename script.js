let data = [];

let container = document.getElementById("container");

document.addEventListener("DOMContentLoaded", function (event) {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((response) => response.json())
    .then((res) => {
      data = res;
      console.log(res);
      for (let i = 0; i < data.length; i++) {
        container.innerHTML += `<div class="card">
            <div class="image">
                <img src=${data[i].image} class="img"/>
            </div>
            <div class="details">
                <div class="row">
                    <span class="name">${data[i].name}</span>
                    <span class="price">${data[i].current_price}</span>
                </div>
                <div class="row">
                    <span class="symbol">${data[i].symbol}</span>
                    <span class="${data[i].market_cap_change_percentage_24h > 0 ? "percent green" : "percent red"}">${data[i].market_cap_change_percentage_24h}%</span>
                </div>
            </div>
        </div>`;
      }
    });
});
