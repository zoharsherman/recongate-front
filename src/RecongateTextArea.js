import React from 'react';
import PropTypes from 'prop-types';
import './RecongateTextArea.css';

//hidden text area, we will use it to detect if we need to manipulate the visible textarea
const hiddenTextarea = document.createElement('textarea');

export default class RecongateTextArea extends React.Component {

    static propTypes = {
        minrows: PropTypes.number,
        maxrows: PropTypes.number
    };

    static defaultProps = {
        minrows: 1,
        maxrows: Infinity
    };

    constructor(props) {
        let value = props.value || props.defaultValue;
        delete props['rows']; // delete this as it is not needed.
        super(props);
        this.state = {
            rows: this.props.minrows,
            value: value
        };

        this.handleChange = this.handleChange.bind(this);
    }



    componentDidMount() {
        //adding the hidden text area to the DOM
        hiddenTextarea.className = 'hidden-text-area';
        document.body.appendChild(hiddenTextarea);
        this.updateTextAreaRows();
    }


    componentWillUnmount() {
        document.body.removeChild(hiddenTextarea);
    }

    handleChange(event) {
        this.updateTextAreaRows();
    }

    haveScroll(node) {
        return node.clientHeight < node.scrollHeight;
    }

    updateTextAreaRows(){
        if (this.myTextArea){
            //first lets copy the style of our textarea
            const style = window.getComputedStyle(this.myTextArea);
            hiddenTextarea.style = style.cssText.replace(/ (height|position|top|right|left|bottom|visibility|z-index): .*?;/g,'') //removing the height attribute so rows will update the height , also removing visibility attributes
                + ' visibility: hidden; z-index: -1000; position: absolute; top: 0; right: 0'; // make this component hidden

            //now lets copy the content
            let value = this.myTextArea.value || this.myTextArea.placeholder;
            hiddenTextarea.value = value && value.length > 0 ? value+'\n' : value;


            let rows = this.props.minrows;

            hiddenTextarea.setAttribute('rows', rows); // setting minrows
            if (this.haveScroll(hiddenTextarea) && rows < this.props.maxrows){// checking if have scroll
                do{
                    rows++;
                    hiddenTextarea.setAttribute('rows', rows);
                } while (this.haveScroll(hiddenTextarea) && rows < this.props.maxrows)
            }else{
                //with min rows no scroll so setting to min
                rows = this.props.minrows;
            }
            this.setState({style: {height: hiddenTextarea.clientHeight}, value: this.myTextArea.value});
        }
    }

    render() {
        let {...props} = this.props;

        return <textarea
            {...props}
            {...this.state}
            className='recongate-text-area'
            onChange={this.handleChange}
            ref={this._setMyTextArea}
        />
    }

    _setMyTextArea = node => {
        this.myTextArea = node;
    };
}
