import React, { Component } from 'react';
import CardList from '../components/CardList';
import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        this.setState({ robots: robots });
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(resp => resp.json())
        //     .then(users => this.setState({ robots : users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })            
        return (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )    
    }
}

export default App;