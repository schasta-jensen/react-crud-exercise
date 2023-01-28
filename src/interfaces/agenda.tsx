
import moment from 'moment'

export interface agendaI { 
    id: number | null;
    type: string;
    date: moment.Moment;
    patient: string;
    doctor?: string;
    procedure?: string;    
}

export const agendaInitialState: agendaI =  {
    id: null,
    type: 'Consulta',
    date: moment(),
    patient: '',
    doctor: '',
    procedure: ''
}
