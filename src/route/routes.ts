export const ROUTES = {
  signUp: '/signup',
  signIn: '/signin',
  resetPassword: '/reset',
  changePassword: '/change_password',

  dashboard: '/dashboard',
  search: '/search',
  favorites: '/favorites',
  prospects: '/prospects',
  prospectsId: (id = ':id'): string => `/prospects/${id}`,
  profile: (id = ':id'): string => `/profile/${id}`,
};


