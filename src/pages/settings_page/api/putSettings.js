export function getSettings() {
  fetch("https://javahack-purchase-api.herokuapp.com/api/v1/settings", {method: "PUT"})
    .then(data => console.log(data))
    .then(data => console.log(data))
    .catch(err => console.log(err))
}