import { stateTypes, ActionChange, Observer, headTypes, bodyTypes, weaponTypes } from "../types/store" 
import { reducer } from './reducer';

export let state: stateTypes = {
	head: headTypes.head1,
	body: bodyTypes.body1,
	weapon: weaponTypes.weapon1,
};


let observers: Observer[] = [];

export const dispatch = (action: ActionChange) => {
	const clone = JSON.parse(JSON.stringify(state));
	state = reducer(action, clone)
	observers.forEach((o) => o.render());
};

export const addObserver = (observer: Observer) => {
    observers.push(observer)
}