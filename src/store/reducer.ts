
import { stateTypes, ActionChange, Actions } from "../types/store";

export const reducer = (action: ActionChange, currentState: stateTypes) => {
    switch (action.type) {
        case Actions.CHANGEHEAD:
            return {
                ...currentState,
                head: action.payload
            }
        case Actions.CHANGEBODY:
            return {
                ...currentState,
                body: action.payload
            }
        case Actions.CHANGEWEAPON:
            return {
                ...currentState,
                weapon: action.payload
            }
        default:
            return currentState
    }
}
