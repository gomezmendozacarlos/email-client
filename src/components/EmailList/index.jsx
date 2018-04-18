import React, {Component} from 'react';
import EmailListMail from '../EmailListMail/index';
import '../../styles/App.scss';

class EmailList extends Component {
    render() {
        return (
                <section className="emailList">
                    <div className="emailList-header">
                        <div className="filter-btn selected"><i className="fas fa-circle"></i> Inbox</div>
                        <div className="filter-btn"><i className="fas fa-trash-alt"></i> Trash</div>
                        <div className="filter-btn"><i className="fas fa-bug"></i> Spam</div>
                    </div>
                    <EmailListMail />
                </section>
        );
    }
}

export default EmailList;
