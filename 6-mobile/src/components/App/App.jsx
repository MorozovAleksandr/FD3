import MobileCompany from "../MobileCompany/MobileCompany.jsx";
import "./App.css"

const clients = [
    {
        id: 0,
        name: 'Вася',
        surname: 'Пупкин',
        patronymic: 'Дмитриевич',
        balance: 200,
        status: true
    },
    {
        id: 1,
        name: 'Ваня',
        surname: 'Веселюшкин',
        patronymic: 'Александрович',
        balance: 200,
        status: true
    },
    {
        id: 2,
        name: 'Петя',
        surname: 'Грустняшкин',
        patronymic: 'Андреевич',
        balance: 200,
        status: false
    }
]

function App() {
    console.log('render App');
    return (
        <div>
            <MobileCompany clients={clients} />
        </div>
    );
}

export default App;
