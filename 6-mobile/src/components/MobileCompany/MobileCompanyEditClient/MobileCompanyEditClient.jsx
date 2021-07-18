import React from "react";
import { myEvents } from '../../../event';

class MobileCompanyEditClient extends React.PureComponent {

    constructor(props) {
        super(props);
        this.surnameRef = React.createRef();
        this.balanceRef = React.createRef();
    }

    saveEdit = (e) => {
        e.preventDefault();
        const updateClient = { ...this.props.client, surname: this.surnameRef.current.value, balance: this.balanceRef.current.value };
        myEvents.emit('EsaveEditClient', updateClient);
    }

    cancelEditing = () => {
        myEvents.emit('EcancelEditingOrAddClient');
    }

    render() {
        return (
            <form>
                <div className="mb-3">
                    <label className="form-label" >Фамилия</label>
                    <input type="text" className="form-control" ref={this.surnameRef} defaultValue={this.props.client.surname} />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Баланс</label>
                    <input type="number" className="form-control" ref={this.balanceRef} defaultValue={this.props.client.balance} />
                </div>
                <button style={{ marginRight: '10px' }} onClick={this.saveEdit} type="submit" className="btn btn-primary">Сохранить</button>
                <button onClick={this.cancelEditing} className="btn btn-primary">Отменить</button>
            </form>
        )
    }
}

export default MobileCompanyEditClient;