export const REGISTRATION_ACTIONS = {
    NOT_STARTED: 'REGISTRATION_NOT_STARTED',
    STARTED: 'REGISTRATION_STARTED',
    FAILED: 'REGISTRATION_FAILED',
    SUCCESS: 'REGISTRATION_SUCCESS'
};

export const REGISTRATION_STATE = {
    registration_status: 'Not Started',
    button_text: 'Start Registration'
};

export const initialState = {}

function registrationReducer(tasks, action) {

    switch(action.type) {

        case REGISTRATION_ACTIONS.NOT_STARTED: {
            return  {
                registration_status: 'Not Started',
                button_text: 'Start Registration'
            };
        }

        case REGISTRATION_ACTIONS.STARTED: {
            return  {
                registration_status: 'Registration Started',
                button_text: 'In Progress'
            };
        }

        case REGISTRATION_ACTIONS.SUCCESS: {
            return  {
                registration_status: 'Registration Success',
                button_text: 'Completed'
            };
        }

        case REGISTRATION_ACTIONS.FAILED: {
            return  {
                registration_status: 'Registration Failed',
                button_text: 'Retry'
            };
        }        
    }
}

export {registrationReducer}