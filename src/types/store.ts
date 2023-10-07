export interface stateTypes {
    head: string,
    body: string,
    weapon: string
}

export enum headTypes {
    head1 = "head1",
    head2 = "head2",
    head3 = "head3"
}

export enum bodyTypes {
    body1 = "body1",
    body2 = "body2",
    body3 = "body3"
}

export enum weaponTypes {
    weapon1 = "weapon1",
    weapon2 = "weapon2",
    weapon3 = "weapon3"
}

export interface ActionChange {
    type: Actions;
    payload: string;
}

export enum Actions {
    "CHANGEHEAD" = "CHANGEHEAD",
    "CHANGEBODY" = "CHANGEBODY",
    "CHANGEWEAPON" = "CHANGEWEAPON"
}

export type Observer = HTMLElement & { render: () => void}