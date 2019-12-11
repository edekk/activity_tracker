import { TimeToMs } from './utilities/TimeConverter';

// add activity
const addActivity = (event) => {
    let errors = '';

    event.preventDefault();
    
    let newActivity = {};
    for (let input of event.target) {
        if (input.name !== "submit") {
            let property = input.name;
            let value = input.value;
            newActivity[`${property}`] = value;
        }
    }

    if (TimeToMs(newActivity.start) >= TimeToMs(newActivity.end)) {
        errors += "Activity start time must be before end time\n";
    }
    if (newActivity.description.length < 1) {
        errors += "Activity description must not be empty\n";
    }
    
    if (errors !== '') {
        alert(errors);
    } else {
        // props.addActivityHandler(newActivity);
        event.target.reset();
        alert("Activity has been added!");
    }
}


// remove activity

const removeActivity = (index, remove) => {
    if (window.confirm("Do you really want to remove this activity?")) {
        remove(index)
    }
}