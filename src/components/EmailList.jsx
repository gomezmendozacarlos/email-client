import React, {Component} from 'react';
import EmailListMail from './EmailListMail';
import '../styles/App.scss';

class EmailList extends Component {
    render() {
        return (
                <section className="emailList">
                    <div className="emailList-header">
                        <div className="filter-btn selected">Inbox</div>
                        <div className="filter-btn">Trash</div>
                        <div className="filter-btn">Spam</div>
                    </div>
                    <EmailListMail />
                </section>
        );
    }
}

export default EmailList;
