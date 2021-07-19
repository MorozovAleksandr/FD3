"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompanyAddClient from '../src/components/MobileCompany/MobileCompanyAddClient/MobileCompanyAddClient';
import MobileCompany from '../src/components/MobileCompany/MobileCompany';

test('Проверка добавления клиента', () => {

    const mobileCompanyComponent = renderer.create(
        <MobileCompany />
    )

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let mobileCompanyComponentTree = mobileCompanyComponent.toJSON();
    expect(mobileCompanyComponentTree).toMatchSnapshot();
});