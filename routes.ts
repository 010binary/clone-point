

/**
 * @applicationRoutes
 * All application in the routes
 */
export const enum ApplicationRoutes {
     
}

const apiPrefix = '/ezone-api-finman/api/v1/'


/**
 * @apiRoutes
 * All API routes 
 */
export const enum ApiRoutes {
    CUSTOMER = `${apiPrefix}customers`,
    PAGINATED_CUSTOMER= `${apiPrefix}paginated-customers`,
    PAGINATED_ACCOUNTS= `${apiPrefix}accounts`
}