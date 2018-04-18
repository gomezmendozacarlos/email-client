import React, {Component} from 'react';
import EmailList from '../EmailList/index';
import EmailView from '../EmailView/index';
import '../../styles/App.scss';

class EmailWrapper extends Component {
    render() {
        return (
            <div className="emailWrapper">
                <EmailList />
                <EmailView />
            </div>
        );
    }
}

export default EmailWrapper;
