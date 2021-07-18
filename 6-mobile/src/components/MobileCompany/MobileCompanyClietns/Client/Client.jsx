import React, { Fragment } from "react";
import { myEvents } from '../../../../event';

class Client extends React.PureComponent {

    deleteClient = () => {
        myEvents.emit('EdeleteClient', this.props.data.id);
    }

    editClient = () => {
        myEvents.emit('EeditClient', this.props.data.id);
    }

    render() {
        console.log('render Client: id ' + this.props.data.id);
        return (
            <Fragment>
                <tr>
                    <td>{this.props.data.surname}</td>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.patronymic}</td>
                    <td>{this.props.data.balance}</td>
                    <td>
                        {
                            this.props.data.status ? <span>Активный</span> : <span>Заблокированный</span>
                        }
                    </td>
                    <td><button onClick={this.editClient} type="button" className="btn btn-secondary">Редактировать</button></td>
                    <td><button onClick={this.deleteClient} type="button" className="btn btn-secondary">Удалить</button></td>
                </tr>
            </Fragment>
        )
    }
}

export default Client;

