import React from "react";
import Client from "./Client/Client";

class MobileCompanyClietns extends React.PureComponent {

    render() {
        console.log('render MobileCompanyClietns');
        const clients = this.props.clients.map(item => <Client key={item.id} data={item} />)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Отчество</th>
                            <th scope="col">Баланс</th>
                            <th scope="col">Статус</th>
                            <th scope="col">Редактировать</th>
                            <th scope="col">Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MobileCompanyClietns;