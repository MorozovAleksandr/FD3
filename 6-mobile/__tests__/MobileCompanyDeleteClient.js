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

test('Проверка удаления клиента', () => {

    // создаём тестовую версию компонента
    const component = mount(
        <MobileCompany clients={clients} />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    expect(toJson(component)).toMatchSnapshot();

    // Ищем кнопку и удаляем первого клиента
    component.find('.btn-delete').at(0).simulate('click');

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    expect(toJson(component)).toMatchSnapshot();

});