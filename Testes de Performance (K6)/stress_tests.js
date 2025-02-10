import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 50 },
    { duration: '1m', target: 200 },
    { duration: '30s', target: 0 },
  ],
}

export default function () {

  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = http.get(url)

  const validate = check(response, {
    'status code 200': (r) => r.status === 200,
    'tempo de resposta é < 1s': (r) => r.timings.duration < 1000,
  })

  if (!validate) {
    console.error(`Request failed: ${response.status} - ${response.body}`)
  }

  sleep(1)
}
