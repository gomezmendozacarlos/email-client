import React, {Component} from 'react';
import '../styles/App.scss';

class EmailView extends Component {
    render() {
        return (<section className="emailView">
            <div className="emailView-header">
                <span className="subjet">Amazon SES Adress Verification Request</span>
                <ul>
                    <li>
                        <span className="actions">o</span>
                    </li>
                    <li>
                        <span className="actions">t</span>
                    </li>
                    <li>
                        <span className="actions">s</span>
                    </li>
                </ul>
            </div>
            <article className="emailView-detail">
                <div className="header">
                    <ul className="sender">
                        <li>
                            <span className="name">Amazon.com</span>
                        </li>
                        <li>
                            <span className="mail">noreply@amazon.com</span>
                        </li>
                    </ul>
                    <span className="date">Thursday, May 26, 11:09 AM</span>
                </div>
                <div className="message">
                    <p>
                        The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee. The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.

                    </p>
                </div>
            </article>
        </section>);
    }
}

export default EmailView;
