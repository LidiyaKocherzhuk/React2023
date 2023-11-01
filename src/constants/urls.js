const placeholderURL = 'https://jsonplaceholder.typicode.com';
const spaceXURL = 'https://api.spacexdata.com/v3';

const users = '/users';
const spaceX = '/launches';

const urls = {
  users: {
    base: users,
    byId: (id) => `${users}/${id}`
  },
  spaceX: {
    base: spaceX,
    excludeYear: (year) => `${spaceX}/?launch_year!=${year}`
  }
}

export {
  placeholderURL,
  spaceXURL,
  urls
}