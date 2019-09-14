export function getSettings() {
  return fetch("https://javahack-purchase-api.herokuapp.com/api/v1/settings", {method: "GET"})
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}