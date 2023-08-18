import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import JobPage from './JobPage';
import NavBar from './NavBar';

ReactDOM.render(<div>
    <NavBar />
    <JobPage />
</div>
, document.getElementById('root'));
