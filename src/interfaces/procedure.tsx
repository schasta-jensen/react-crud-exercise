export interface procedureI  { 
    id: number | null;
    name: string; 
    duration: number;
}

export const procedureInitialState: procedureI =  {
    id: null,
    name: '',
    duration: 0
}
