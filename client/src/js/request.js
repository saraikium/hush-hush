function createQueryString(queryParams = {}) {
  let queryString = '?';
  let i = -1;

  for (let key of Object.keys(queryParams)) {
    queryString += `${key}=${queryParams[key]}`;
    i = i + 1;
    if (i < Object.keys(queryParams).length - 1) {
      queryString += '&';
    }
  }

  if (i > -1) {
    return queryString;
  }
  return '';
}

async function ajaxRequest(
  method,
  url,
  data = {},
  headers = {},
  queryParams = {}
) {
  Object.assign(headers, {
    'Content-Type': 'application/json', // additional headers
  });
  url += createQueryString(queryParams);

  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data),
  })
    .then((response) => response)
    .catch((err) => {
      console.error(err);
      throw new Error('Something bad happened while queueing your request 😢.');
    });
}

export { ajaxRequest };
