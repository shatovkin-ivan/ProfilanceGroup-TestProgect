import AuthPopup from '../actions/AuthPopup';

function authPopup(value) {
	return {
		type: AuthPopup,
		value_1: value
	};
}

export default authPopup;