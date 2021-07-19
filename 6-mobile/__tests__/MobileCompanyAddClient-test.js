"use strict";

import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import MobileCompany from '../src/components/MobileCompany/MobileCompany';

configure({ adapter: new Adapter() });


const clients = [
    {
        id: 0,
        name: 'Вася',
        surname: 'Пупкин',
        patronymic: 'Дмитриевич',
        balance: 200
    },
    {
        id: 1,
        name: 'Ваня',
        surname: 'Веселюшкин',
        patronymic: 'Александрович',
        balance: 200
    },
    {
        id: 2,
        name: 'Петя',
        surname: 'Грустняшкин',
        patronymic: 'Андреевич',
        balance: -200
    }
]

const newClient = {
    name: 'Димка',
    surname: 'Прыгунчик',
    patronymic: 'Владимирович',
    balance: "135"
}

test('Проверка добавления клиента', () => {

    // создаём тестовую версию компонента
    const component = mount(
        <MobileCompany clients={clients} />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    expect(toJson(component)).toMatchSnapshot();

    // Ищем кнопку и кликаем
    component.find('.btn-add').simulate('click');

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    expect(toJson(component)).toMatchSnapshot();

    // получаем поле и добавляем имя + проверка
    const inputName = component.find('.name');
    inputName.getDOMNode().value = newClient.name;
    inputName.simulate('change');
    expect(inputName.getDOMNode().value).toEqual(newClient.name);

    // получаем поле и добавляем фамилию + проверка
    const inputSurname = component.find('.surname');
    inputSurname.getDOMNode().value = newClient.surname;
    inputSurname.simulate('change');
    expect(inputSurname.getDOMNode().value).toEqual(newClient.surname);

    // получаем поле и добавляем отчество + проверка
    const inputPatronymic = component.find('.patronymic');
    inputPatronymic.getDOMNode().value = newClient.patronymic;
    inputPatronymic.simulate('change');
    expect(inputPatronymic.getDOMNode().value).toEqual(newClient.patronymic);

    // получаем поле и добавляем баланс + проверка
    const inputBalance = component.find('.balance');
    inputBalance.getDOMNode().value = newClient.balance;
    inputBalance.simulate('change');
    expect(inputBalance.getDOMNode().value).toEqual(newClient.balance);

    // отправляем форму
    component.find('.btn-save').simulate('click');

    expect(toJson(component)).toMatchSnapshot();
});