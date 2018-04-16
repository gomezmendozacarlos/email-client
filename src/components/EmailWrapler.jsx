import React, {Component} from 'react';
import EmailList from './EmailList';
import EmailView from './EmailView';
import '../styles/App.scss';

class EmailWrapler extends Component {
    render() {
        return (
            <div className="emailWrapler">
                <EmailList />
                <EmailView />
            </div>
        );
    }
}

export default EmailWrapler;
