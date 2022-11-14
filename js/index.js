'use strict';

const e = React.createElement;

class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>Hi there 👋</h1>
                <p>I've been 20+ years in the IT industry with focus on Enterprise Integration and Architecture. Collaborating in many projects for government and private organizations, giving training and consulting services in different countries, designing and developing solutions and help companies to improve their software development process and security.</p>
                <p>I have a degree in Mathematical Cybernetics from the University of Havana, and I love automation.</p>
                <p>🔭 I’m currently working as Site Reliability Engineer (SRE) at Ultimate Kronos Group (UKG), one of the indisputable leaders in HCM industry.</p>
            </div>
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Main));
