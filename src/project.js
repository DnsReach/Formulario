import React, { useState } from 'react';

import axios from 'axios';
import Loading from './loading/loading';

import './style.css';
import './decoration.css';

const INIT = {
    name: "",
    lang: "",
    age: "",
    email: "",
    FrontEnd: "",
    BackEnd: "",
    Mobile: ""
};

const Project = () => {

    const [state, setState] = useState(INIT);
    const [loading, setLoading] = useState(false);
    const [pagestate, setPageState] = useState(false);

    const onC = (ev) => {
        const { name, value } = ev.target;
        setState({ ...state, [name]: value });
    };

    const SUB = (pre) => {
        pre.preventDefault();
        setLoading(true);
        axios.post(
            "http://localhost:5000/people", state
        )
            .then(
                resp => {
                    setLoading(false);
                    setPageState(true);
                }
            );
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (pagestate) {
        return (
            <div id="animation_centralize">
                <h1 className="h1">Welcome</h1>
                <Loading />
                <h3 className="h3">I really hope   that you like </h3>
            </div>
        );
    }

    return (
        <>
            <div className="div-form">
                <form onSubmit={SUB}>

                    <div className="container-1">
                        <label>NAME</label>
                        <input id="input-1" name="name" type="text" onChange={onC} />
                        <label>AGE</label>
                        <input id="input-1" name="age" type="number" onChange={onC} />
                        <label>EMAIL</label>
                        <input id="input-1" name="email" type="text" onChange={onC} />
                    </div>

                    <div className="container-2">
                        <label className="label_programming">What kind of programming are you?</label>
                        <div id="div_input_checkbox">
                            <main classame="checkbox-1">
                                <input name="FrontEnd" type="checkbox" onChange={onC} />
                                <label>Front End </label>
                            </main>
                            <main classame="checkbox-2">
                                <input name="BackEnd" type="checkbox" />
                                <label>Backend </label>
                            </main>
                            <main classame="checkbox-2">
                                <input name="Mobile" type="checkbox" />
                                <label>Mobile </label>
                            </main>
                        </div>
                    </div>

                    <div className="container-3">
                        <label>LANGUAGE</label>
                        <select id="input-1" name="lang" onChange={onC}>

                            <option name="lang" ></option>
                            <option name="lang" value="PYTHON">PYTHON</option>
                            <option name="lang" value="PHP">PHP</option>
                            <option name="lang" value="JS">JS</option>
                            <option name="lang" value="RUBY">RUBY</option>
                            <option name="lang" value="JAVA">JAVA</option>
                            <option name="lang" value="KOTLIN">KOTLIN</option>
                            <option name="lang" value="SWIFT">SWIFT</option>
                            <option name="lang" value="ELIXIR">ELIXIR</option>
                            <option name="lang" value="FLUTTER">FLUTTER</option>
                            <option name="lang" value="C">C</option>
                            <option name="lang" value="C++">C++</option>
                            <option name="lang" value="C#">C#</option>

                        </select>

                        <button id="butt" type="submit">Click</button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Project;
