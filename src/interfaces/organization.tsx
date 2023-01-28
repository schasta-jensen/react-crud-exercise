import moment from "moment";

export interface defaultI { 
error?: string | undefined;
status?: string | undefined;
}

export interface addressI { 
    rua?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    numero?: string;
    cep: string;    
}

export interface scheduleI { 
    diaSemana: number;
    periodStart: moment.Moment;   
    periodEnd?: moment.Moment;
}

export interface organizationI extends defaultI  { 
    id: number | null;
    nomeFantasia: string; 
    responsavelLegal: string;
    especialidade: string;
    cnpj: string;
    address: addressI;
    email: string;
    celular?: string;
    telefone?: string;   
    schedule?: scheduleI[];    
}

export type organizationT = { 
    id: number | null;
    nomeFantasia: string; 
    responsavelLegal: string;
    especialidade: string;
    cnpj: string;
    address: addressI;
    email: string;
    celular?: string;
    telefone?: string;   
    schedule?: scheduleI[];   
    error?: string | undefined;
    status?: string | undefined 
}

export const organizatioInitialState: organizationI =  {
    id: null,
    nomeFantasia: '',
    responsavelLegal: '',
    especialidade: '',
    cnpj: '',
    celular: '',
    telefone: '',
    email: '',
    address: {cep: '' },
    schedule: [{ 
        diaSemana: moment().isoWeekday(), 
        periodStart: moment(), 
        periodEnd: moment().add(30, 'minutes')
    }],
    status: 'idle',
    error: undefined
}

