const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const users = '/users'
const auth = '/auth'
const cars = '/cars'

const urls = {
  auth: {
    login: auth,
    register: users,
    me: `${auth}/me`
  },
  cars: {
    base: cars,
    byId: (id) => `${cars}/${id}`,
    photoById: (id) => `${cars}/${id}/photo`,
  },
};

export {baseURL, urls};
