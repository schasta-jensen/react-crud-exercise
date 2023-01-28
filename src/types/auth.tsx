export interface appPermission {
    showModeratorBoard: boolean,
    showAdminBoard: boolean,
    currentUser: undefined,
};

export interface newPassword {
    username: string;
    password: string;
    confirmPassword: string;   
};

export interface selectForm {
    id: string,
    name: string,
    visible: boolean,
    component: any
};



  