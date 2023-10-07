import { ActionChange, Actions } from '../types/store';

export const changeHead = (payload: any): ActionChange => {
	return {
		type: Actions.CHANGEHEAD,
		payload,
	};
	
};
export const changeBody = (payload: any): ActionChange => {
	return {
		type: Actions.CHANGEBODY,
		payload,
	};
	
};
export const changeWeapon = (payload: any): ActionChange => {
	return {
		type: Actions.CHANGEWEAPON,
		payload,
	};
	
};
