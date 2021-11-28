import { connect } from 'react-redux';
import LoginPopup from '../LoginPopup/LoginPopup';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const LoginPopupWrap = connect(mapStateToProps("LoginPopup"), mapDispatchToProps("LoginPopup"))(LoginPopup);

export default LoginPopupWrap;