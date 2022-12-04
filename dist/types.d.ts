export interface AuthMe {
    clientPrincipal: null | {
        claims: {
            typ: string;
            val: string;
        }[];
        identityProvider: string;
        userDetails: string;
        userId: string;
        userRoles: string[];
    };
}
//# sourceMappingURL=types.d.ts.map