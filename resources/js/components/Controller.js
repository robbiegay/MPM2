import React from "react";
import axios from "axios";

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: 0,
            user: null,
            timer: null,
        }
    }

    componentDidMount() {
        axios.post("http://127.0.0.1:8000/api/newuser");
        axios.get("http://127.0.0.1:8000/api/userid").then(response => {
            // Put all of the user info in state, can then access the id, param_id, and queue_id
            this.setState({ user: response.data });
            this.setState({
                timer: setTimeout(() => {
                    axios.post('http://127.0.0.1:8000/api/synthparams/clear/' + this.state.user['id']);
                }, 5000),
            });
        });

    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
        // axios.get("http://127.0.0.1:8000/api/userid").then(response => {
        //     axios.post('http://127.0.0.1:8000/api/synthparams/clear/' + response.data["id"]);
        // });
        axios.post('http://127.0.0.1:8000/api/synthparams/clear/1'); //+ this.state.user["id"]);
    }

    render() {
        if (this.state.user) {
            switch (this.state.user['queue_id']) {
                case 1:
                    return (
                        <>
                            <button
                                onClick={() => {
                                    // On click, clears the interval, and sets a new 30 second timer
                                    clearInterval(this.state.timer);
                                    this.setState({
                                        timer: setTimeout(() => {
                                            axios.post('http://127.0.0.1:8000/api/synthparams/clear/1');
                                        }, 5000),
                                    });
                                    // Toggles the synth trigger
                                    axios.post("http://127.0.0.1:8000/api/synthparams/trigger", {
                                        trigger: this.state.trigger,
                                    });
                                }}
                            >PLAY TONE</button>
                        </>
                    );
                case 2:
                    return (
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Pitch</label>
                                <input
                                    type="range"
                                    defaultValue="400"
                                    onMouseUp={(e) => {
                                        // clearInterval(this.state.timer);
                                        // this.setState({
                                        //     timer: setTimeout(() => {
                                        //         axios.post('http://127.0.0.1:8000/api/synthparams/clear/2');
                                        //     }, 5000),
                                        // });
                                        axios.post("http://127.0.0.1:8000/api/synthparams/pitch", {
                                            pitch: e.target.value,
                                        })
                                    }}
                                    className="form-control-range"
                                    min="100"
                                    max="1000"
                                    step="1"
                                // orient="vertical"
                                // width="8px"
                                // height="175px"
                                />
                            </div>
                        </form>
                    );
                case 3:
                    return (
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Ping Pong Feedback</label>
                                <input
                                    type="range"
                                    defaultValue="0"
                                    onMouseUp={(e) => {
                                        clearInterval(this.state.timer);
                                        this.setState({
                                            timer: setTimeout(() => {
                                                axios.post('http://127.0.0.1:8000/api/synthparams/clear/3');
                                            }, 5000),
                                        });
                                        axios.post("http://127.0.0.1:8000/api/synthparams/pingPongFbk", {
                                            pingPongFbk: e.target.value,
                                        })
                                    }}
                                    className="form-control-range"
                                    min="0"
                                    max="1.5"
                                    step="0.01"
                                />
                            </div>
                        </form>
                    );
                case 4:
                    return (
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Waveshaper Dry/Wet</label>
                                <input
                                    type="range"
                                    defaultValue="0"
                                    onChange={(e) => {
                                        clearInterval(this.state.timer);
                                        this.setState({
                                            timer: setTimeout(() => {
                                                axios.post('http://127.0.0.1:8000/api/synthparams/clear/4');
                                            }, 5000),
                                        });
                                        axios.post("http://127.0.0.1:8000/api/synthparams/chebWet", {
                                            chebWet: e.target.value,
                                        })
                                    }}
                                    className="form-control-range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                />
                            </div>
                        </form>
                    );
                case 5:
                    return (
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Reverb Dry/Wet</label>
                                <input
                                    type="range"
                                    defaultValue="0"
                                    onChange={(e) => {
                                        clearInterval(this.state.timer);
                                        this.setState({
                                            timer: setTimeout(() => {
                                                axios.post('http://127.0.0.1:8000/api/synthparams/clear/5');
                                            }, 5000),
                                        });
                                        axios.post("http://127.0.0.1:8000/api/synthparams/reverbWet", {
                                            reverbWet: e.target.value,
                                        })
                                    }}
                                    className="form-control-range"
                                    min="0"
                                    max="0.5"
                                    step="0.01"
                                />
                            </div>
                        </form>
                    );
                case 6:
                    return (
                        <button
                            onClick={() => {
                                clearInterval(this.state.timer);
                                this.setState({
                                    timer: setTimeout(() => {
                                        axios.post('http://127.0.0.1:8000/api/synthparams/clear/6');
                                    }, 5000),
                                });
                                axios.post("http://127.0.0.1:8000/api/synthparams/stroke", {
                                    stroke: this.state.stroke,
                                });
                            }}
                        >STROKE TOGGLE</button>
                    );
                case 7:
                    return (
                        <form>
                            <div className="form-group">
                                <label htmlFor="formControlRange">Square Size</label>
                                <input
                                    type="range"
                                    defaultValue="0"
                                    onChange={(e) => {
                                        clearInterval(this.state.timer);
                                        this.setState({
                                            timer: setTimeout(() => {
                                                axios.post('http://127.0.0.1:8000/api/synthparams/clear/7');
                                            }, 5000),
                                        });
                                        axios.post("http://127.0.0.1:8000/api/synthparams/sqSize", {
                                            sqSize: e.target.value,
                                        })
                                    }}
                                    className="form-control-range"
                                    min="1"
                                    max="50"
                                    step="1"
                                />
                            </div>
                        </form>
                    );
                default:
                    return (
                        <h1>&#9203;</h1>
                    );
            }
        } else {
            return (
                <p>Loading...</p>
            );
        }
    }
}

export default Controller;
