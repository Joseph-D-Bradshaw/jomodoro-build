export type Note = {
    title: string;
    description: string;
    status: Status;
    estimated?: number;
};

export type Status = 'todo' | 'in progress' | 'done';
export type StatusRadio = {
    value: Status;
    displayName: string;
};