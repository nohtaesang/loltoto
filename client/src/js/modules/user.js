import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import axios from 'axios';

const SET_TOKEN = 'SET_TOKEN';
const SET_EMAIL = 'SET_EMAIL';
const GET_USER_INFO = 'GET_USER_INFO';

export const setToken = token => ({
	type: SET_TOKEN,
	payload: token
});

export const setEmail = email => ({
	type: SET_EMAIL,
	payload: email
});

export const getUserInfo = token => ({
	type: GET_USER_INFO,
	payload: axios.get('https://openapi.naver.com/v1/nid/me', {
		url: 'https://openapi.naver.com/v1/nid/me',
		headers: { Authorization: `Bearer ${token}` }
	})
});

const initialState = {
	email: null,
	money: null,
	isLogin: false,
	token: null
};

export default handleActions(
	{
		[SET_TOKEN]: (state, action) => ({
			...state,
			token: action.payload
		}),
		[SET_EMAIL]: (state, action) => ({
			...state,
			email: action.payload
		}),
		...pender({
			type: GET_USER_INFO,
			onFailure: (state, action) => {
				console.log(action);
				return { ...state };
			},
			onSuccess: (state, action) => {
				console.log(action);
				return { ...state };
			}
		})
	},
	initialState
);
