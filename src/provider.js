import React, { Component } from 'react'
import AppContext from './context';
import randomId from './utilities/IdGenerator'

class AppProvider extends Component {

    state = {
        activities: [
        ],
        addActivity: (activity) => this.addActivity(activity),
        removeActivity: (id) => this.removeActivity(id)
    }

    
    addActivity = (newActivity) => {
        this.setState( previousState => ({
            activities: [...previousState.activities,
                {
                    start: newActivity.start,
                    end: newActivity.end,
                    description: newActivity.description,
                    id: randomId()
                }
            ]
        }))
    }

    removeActivity = (activityIndex) => {
        const activities = [...this.state.activities];
        activities.splice(activityIndex, 1);
        this.setState( { activities: activities} );
    }

    render() {
        const { children } = this.props;
        return(
            <AppContext.Provider value={{ state: this.state }}>
                { children }
            </AppContext.Provider>
        );
    }
}

export default AppProvider;