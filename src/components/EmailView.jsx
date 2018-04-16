import React, {Component} from 'react';
import '../styles/App.scss';

class EmailView extends Component {
    render() {
        return (
            <section className="emailView">
                <div className="emailView-header">Detal Header</div>
                <article className="emailView-detail">
                    Detail view</article>
            </section>
        );
    }
}

export default EmailView;
