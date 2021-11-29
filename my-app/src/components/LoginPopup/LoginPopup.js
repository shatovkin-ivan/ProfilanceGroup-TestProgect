import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {userPostFetch} from '../../store/actionCreators/AuthPopup';

class Modal extends Component {
    // state = {
    //     username: "",
    //     password: "",
    // }

    // handleChange = event => {
    //     this.setState({
    //       [event.target.name]: event.target.value
    //     });
    // }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     this.props.userPostFetch(this.state)
    // }

    render () {
        return (
            <div className={this.props.active ? "active overlay" : "overlay"} onClick={() => this.props.setActive(false)}> 
                <div className="authorization card" onClick={e => e.stopPropagation()}> 
                    <button type="button" className="authorization__close" onClick={() => this.props.setActive(false)}></button>
                    <form className="authorization__form" method="POST">
                        <fieldset className="authorization__form-wrap">
                            <legend className="authorization__form-title">Вход</legend>
                            <ul className="authorization__form-list"> 
                                <li className="authorization__form-item"> 
                                    <label className="authorization__form-label">
                                        Логин
                                    </label>
                                    <div className="authorization__form-input input-wrap"> 
                                        <input className="input" type="text"/>
                                    </div>
                                </li>
                                <li className="authorization__form-item"> 
                                    <label className="authorization__form-label">
                                        Пароль
                                    </label>
                                    <div className="authorization__form-input input-wrap">
                                        <input className="input" type="password"/>
                                        <button className="toggle-password" type="button">
                                            <svg className="toggle-password__icon open">
                                                <use href="../../images/sprites.svg#view-open"></use>
                                            </svg>
                                            <svg className="toggle-password__icon close">
                                                <use href="../../images/sprites.svg#view-close"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <button className="btn type-1 authorization__form-btn" type="submit">
                                Войти
                            </button>
                            <a className="authorization__form-link" href="/">
                                Забыли пароль?
                            </a>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
} 

export default Modal