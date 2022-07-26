
export interface URIOption {
    protocol: 'redis' | 'mongo' | undefined;
    password: string | undefined;
    host: string;
    port: string | undefined;
    database: string | undefined;
}

export const getURI = (option: URIOption) => {
    const {protocol, password, host, port, database} = option;
    return `${protocol}://${password && `:${password}@`}${host}${port && `:${port}`}${database && `:${database}`}`;
}