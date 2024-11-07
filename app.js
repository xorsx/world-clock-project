setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = document.querySelector("#los-angeles-date");
  let losAngelesTimeElement = document.querySelector("#los-angeles-time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = moment().format("dddd MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )}<small>${losAngelesTime.format("A")}</small>`;
}, 1000);

setInterval(function () {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = document.querySelector("#paris-date");
  let parisTimeElement = document.querySelector("#paris-time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = moment().format("dddd MMMM Do YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss"
  )}<small>${parisTime.format("A")}</small>`;
}, 1000);
