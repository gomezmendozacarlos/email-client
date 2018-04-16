import React, {Component} from 'react';
import '../styles/App.scss';

class EmailListMail extends Component {
    render() {
        return (<section>
            <article className="emailList-mail">
                <div className="indicators">
                    <span className="read not"><i class="fas fa-circle"></i></span>
                </div>
                <div className="details">
                    <div className="sender">
                        <img src="https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1" alt="Avatar" height="12" width="12"/>
                        <span className="name">Agave Lab</span>
                    </div>
                    <span className="subjet">Frontend Challenge</span>
                    <span className="content">Lorem impsum dolor sit amet, consecteuter adipdfsdsdfsdf sdfwsds</span>
                </div>
                <div className="date">
                    <span className="days">Jun 1</span>
                </div>
            </article>
            <article className="emailList-mail selected-mail">
                <div className="indicators">
                    <span className="read">h</span>
                </div>
                <div className="details">
                    <div className="sender">
                        <img src="https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1" alt="Avatar" height="12" width="12"/>
                        <span className="name">Agave Lab</span>
                    </div>
                    <span className="subjet">Frontend Challenge</span>
                    <span className="content">Lorem impsum dolor sit amet, consecteuter adipdfsdsdfsdf sdfwsds</span>
                </div>
                <div className="date">
                    <span className="days">Jun 1</span>
                </div>
            </article>
            <article className="emailList-mail">
                <div className="indicators">
                    <span className="read">h</span>
                </div>
                <div className="details">
                    <div className="sender">
                        <img src="https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1" alt="Avatar" height="12" width="12"/>
                        <span className="name">Agave Lab</span>
                    </div>
                    <span className="subjet">Frontend Challenge</span>
                    <span className="content">Lorem impsum dolor sit amet, consecteuter adipdfsdsdfsdf sdfwsds</span>
                </div>
                <div className="date">
                    <span className="days">Jun 1</span>
                </div>
            </article>
            <article className="emailList-mail">
                <div className="indicators">
                    <span className="read">h</span>
                </div>
                <div className="details">
                    <div className="sender">
                        <img src="https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1" alt="Avatar" height="12" width="12"/>
                        <span className="name">Agave Lab</span>
                    </div>
                    <span className="subjet">Frontend Challenge</span>
                    <span className="content">Lorem impsum dolor sit amet, consecteuter adipdfsdsdfsdf sdfwsds</span>
                </div>
                <div className="date">
                    <span className="days">Jun 1</span>
                </div>
            </article>
            <article className="emailList-mail">
                <div className="indicators">
                    <span className="read">h</span>
                </div>
                <div className="details">
                    <div className="sender">
                        <img src="https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1" alt="Avatar" height="12" width="12"/>
                        <span className="name">Agave Lab</span>
                    </div>
                    <span className="subjet">Frontend Challenge</span>
                    <span className="content">Lorem impsum dolor sit amet, consecteuter adipdfsdsdfsdf sdfwsds</span>
                </div>
                <div className="date">
                    <span className="days">Jun 1</span>
                </div>
            </article>
        </section>);
    }
}

export default EmailListMail;
