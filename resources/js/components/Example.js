import React from 'react';
import ReactDOM from 'react-dom';
import PtsTest from './PtsTest';
import Synth from './Synth';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <PtsTest />
                        <Synth />
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
