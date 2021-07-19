"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompanyFilters from '../src/components/MobileCompany/MobileCompanyFilters/MobileCompanyFilters';

test('Рендер фильтра', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
        <MobileCompanyFilters />
    );

    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree = component.toJSON();
    expect(componentTree).toMatchSnapshot();

});