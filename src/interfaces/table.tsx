export interface headCell {
    disablePadding: boolean;
    id: string | number;
    label: string;
    numeric: boolean;
}
export interface tableColI {
    value: string | number | null;
}

export default interface tableI {
    titles: headCell[];
    cols: tableColI[];
    canOrder: boolean;
}