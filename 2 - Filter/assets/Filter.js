const words = [
    { text: 'Привет', code: 1 },
    { text: 'Как', code: 2 },
    { text: 'Дела', code: 3 },
    { text: 'Скорость', code: 4 },
    { text: 'Прыжок', code: 5 },
    { text: 'Упор', code: 6 },
];

const Filter = React.createClass({
    displayName: 'Filter',

    getInitialState: function () {
        return {
            words: this.props.words,
            term: '',
            statusAlphabetFilter: false,
        };
    },

    search(words, term) {
        const destructWords = [...words];
        if (term.length === 0) return destructWords;

        return destructWords.filter((item) => {
            return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    },

    alphabetFilter(words, statusAlphabetFilter) {
        if (!statusAlphabetFilter) return words;
        return words.sort((a, b) => {
            if (a.text > b.text) {
                return 1;
            }
            if (a.text < b.text) {
                return -1;
            }
            return 0;
        });
    },

    onSearchChange(e) {
        const term = e.target.value;
        this.setState({ term });
    },

    onStatusAlphabeChange() {
        const status = !this.state.statusAlphabetFilter;
        this.setState({ statusAlphabetFilter: status });
    },

    resetFilters() {
        this.setState({
            statusAlphabetFilter: false,
            term: '',
        });
    },

    render() {
        const visibleWords = this.search(this.state.words, this.state.term);
        const visibleAlphabetFilterWords = this.alphabetFilter(visibleWords, this.state.statusAlphabetFilter);
        const words = visibleAlphabetFilterWords.map((item) => {
            const { text, code } = item;
            return (
                React.DOM.option({ key: code }, text)
            )
        });

        return (
            React.DOM.div({ className: 'container mt-4' },
                React.DOM.div({ className: 'col' },
                    React.DOM.input({ className: 'form-check-input me-1', type: 'checkbox', onChange: this.onStatusAlphabeChange, checked: this.state.statusAlphabetFilter }),
                    React.DOM.input({ type: 'text', onChange: this.onSearchChange, value: this.state.term }),
                    React.DOM.input({ className: 'btn btn-primary', type: 'button', onClick: this.resetFilters, value: 'сброс' })
                ),
                React.DOM.select({ className: 'col mt-4', multiple: 'multiple', size: '4' }, words)
            )
        )
    }
})


ReactDOM.render(
    React.createElement(Filter, { words: words }),
    document.getElementById('root')
);