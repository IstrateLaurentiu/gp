export type User = {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
}

export type Profile = {
    user: User;
    description: string;
}



export type ReducerAction = {
    type: string;
    payload: any;
}



export enum ProductType {
    CARBON = 'CARBON',
    PLASTIC_BOTTLE = 'PLASTIC_BOTTLE',
    TREES = 'TREES'
}

export enum Color {
    DARK_BLUE = '#2E3A8C',
    GREEN = '#3B755F',
    BEIGE = '#F2EBDB',
    WHITE = '#F9F9F9',
    BLACK = '#000000'
}

export type Post = {
    _id: string;
    user: string;
    type: ProductType;
    amount: number;
    color: Color;
    isPublic?: boolean;
}

export enum DbTable {
    USER = 'USER',
    PROFILE = 'PROFILE',
    POSTS = 'POSTS'
}
    

export type DbDTO = User | Profile | Post