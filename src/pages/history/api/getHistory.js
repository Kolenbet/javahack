export function getHistory() {
  return fetch(`https://javahack-purchase-api.herokuapp.com/api/v1/history/queries/`, {method: "GET"})
    .then(resp => resp.json())
    .then(data => data)
    .catch(err => console.log(err))
}