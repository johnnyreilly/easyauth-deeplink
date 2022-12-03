export interface AuthMe {
    clientPrincipal: null | {
        identityProvider: string;
        userId: string;
        userDetails: string;
        userRoles: string[];
        claims: {
            typ: string;
            val: string;
        }[];
    };
}
