import React from "react";
import crypto from "crypto";
import { myEvents } from '../../../event';

class MobileCompanyAddClient extends React.PureComponent {

    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.surnameRef = React.createRef();
        this.patronymicRef = React.createRef();
        this.balanceRef = React.createRef();
        this.statusRef = React.createRef();
    }

    saveEdit = (e) => {
        e.preventDefault();
        const newClient = {
            id: crypto.randomBytes(2).toString("hex"),
            name: this.nameRef.current.value,
            surname: this.surnameRef.current.value,
            patronymic: this.patronymicRef.current.value,
            balance: +this.balanceRef.current.value
        };

        myEvents.emit('EaddClient', newClient);
    }

    cancelAddClient = () => {
        myEvents.emit('EcancelEditingOrAddClient');
    }

    render() {
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label" >Фамилия</label>
                    <input type="text" className="form-control surname" id="surname" ref={this.surnameRef} />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Имя</label>
                    <input type="text" className="form-control name" id="name" ref={this.nameRef} />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Отчество</label>
                    <input type="text" className="form-control patronymic" id="patronymic" ref={this.patronymicRef} />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Баланс</label>
                    <input type="number" className="form-control balance" id="balance" ref={this.balanceRef} />
                </div>
                <button style={{ marginRight: '10px' }} onClick={this.saveEdit} type="submit" className="btn btn-primary btn-save">Сохранить</button>
                <button onClick={this.cancelAddClient} className="btn btn-primary ">Отменить</button>
            </form>
        )
    }
}

export default MobileCompanyAddClient