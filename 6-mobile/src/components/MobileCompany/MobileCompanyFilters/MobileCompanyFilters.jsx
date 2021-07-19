import React from "react";
import { myEvents } from '../../../event';

class MobileCompanyFilters extends React.PureComponent {

    onClickFilter = (e) => {
        myEvents.emit('EfilteringClients', +e.target.dataset.mode);
    }

    render() {
        console.log('render MobileCompanyFilters');
        return (
            <div>
                <button data-mode={0} onClick={this.onClickFilter} type="button" className="btn btn-secondary btn-space fbtn-all">Все</button>
                <button data-mode={1} onClick={this.onClickFilter} type="button" className="btn btn-secondary btn-space fbtn-active">Активные</button>
                <button data-mode={2} onClick={this.onClickFilter} type="button" className="btn btn-secondary btn-space fbtn-block">Заблокированные</button>
            </div>
        )
    }
}

export default MobileCompanyFilters;