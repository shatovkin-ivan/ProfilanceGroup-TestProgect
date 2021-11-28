function mapStateToProps(component) {
	switch (component) {
		case "LoginPopup": {
			return function (state) {
				return {
					value_1: state.value_1
				};
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;