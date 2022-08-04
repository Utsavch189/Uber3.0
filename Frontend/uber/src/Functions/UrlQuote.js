const quoteChar = (c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0').toUpperCase()
const quote = (s) => encodeURIComponent(s).replace(/[()*!']/g, quoteChar).replace(/%2F/g, '/')

export const quote_plus = (s) => quote(s).replace(/%20/g, '+')