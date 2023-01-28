export interface user {
    username: string;
};

export interface userLogin extends user {    
    password: string;     
    loading?: boolean;
    message?: string;   
};

export interface userRegisterI extends userLogin {
    email: string;
    successful?: boolean;   
};

export type userRegister = {
    fullname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};