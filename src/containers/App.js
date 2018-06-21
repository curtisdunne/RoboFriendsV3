import React from 'react';
import './App.css';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../Actions.js';
import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
    return {
        searchFieldText: state.searchRobots.searchFieldText,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    render() {
        const { searchFieldText, onSearchChange, robots, isPending } = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase()
                .includes(searchFieldText.toLowerCase());
        })

        if (isPending) {
          return <h1>Loading....</h1>
        } else {
          return (
              <div className='tc'>
                  <Header />
                  <SearchBox searchChange={ onSearchChange }/>

                  <Scroll>
                    <ErrorBoundry>
                      <CardList robots={ filteredRobots }/>
                    </ErrorBoundry>  
                  </Scroll>
              </div>
          );      
        }
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

