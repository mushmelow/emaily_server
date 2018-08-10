import React from 'react';
import Header from './Header'

//import react-router
import {BrowserRouter, Route} from 'react-router-dom';

//test component

const Dashboard = () => <h2> Dashboard</h2>
const SurveyNew = () => <h2> SurveyNew</h2>
const Landing = () => <h2> Landing</h2>

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path= "/" component={Landing} />
                    <Route exact path= "/surveys" component={Dashboard} />
                    <Route path= "/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>

    );
};
export default App;

