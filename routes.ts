/**
 * The routes which are publically accessible
 * These routes does not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/about",
    "/pricing",
    "/privacy",
    "/terms",
];

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
