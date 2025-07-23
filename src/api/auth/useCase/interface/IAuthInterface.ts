
export interface IAuthInterface { 
    login(email: string, password: string): any;
    register(input: any): any;
    logout(token: string): any;
    refreshToken(token: string): any;
}