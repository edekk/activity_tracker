import randomId from './utilities/IdGenerator';


const addActivity = (state, newActivity) => {
    return [...state.activities,
        {
            start: newActivity.start,
            end: newActivity.end,
            description: newActivity.description,
            id: randomId()
        }
    ]
}

const removeActivity = (state, activityIndex) => {
    const activities = state.activities;
    activities.splice(activityIndex, 1);
    return activities;
}

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            return {...state, activities: addActivity(state, action.newActivity)}
        case 'REMOVE_ACTIVITY':
            return {...state, activities: removeActivity(state, action.activityIndex)};
        default:
            return state
    }
}

export default rootReducer;