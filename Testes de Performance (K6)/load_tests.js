import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 100, 
  duration: '30s', 
}

export default function () {

  const url = 'https://jsonplaceholder.typicode.com/users'
  const response = http.get(url)

  check(response, {
    'status code 200': (r) => r.status === 200,
    'tempo de reposta é < 500ms': (r) => r.timings.duration < 500
  })

  sleep(1)
}