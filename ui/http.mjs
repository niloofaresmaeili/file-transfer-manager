export function Get(url, token) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization': token
    }
  }).then(r => r.json())
}

export function Post(url, body) {
  return fetch('/auth/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())
}