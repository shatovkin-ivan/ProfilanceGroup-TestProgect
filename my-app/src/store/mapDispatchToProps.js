import { bindActionCreators } from 'redux';
import AuthPopup from './actionCreators/AuthPopup';

function mapDispatchToProps(component) {
	switch (component) {
		case "LoginPopup": return function (dispatch) {
			return {
				change_value_1: bindActionCreators(AuthPopup, dispatch)
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps;