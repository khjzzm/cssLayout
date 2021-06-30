
// Union Type: OR
{
    type Direction = 'left' | 'right' | ' up' | 'down';

    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');

//-------
    type SuccessState = {
        response: {
            body: string;
        };
    }

    type FailState = {
        reason: string
    }
    type LoginState = SuccessState | FailState

    function loginTest(id: string, password: string): Promise<LoginState> {
        return {
            response: {
                body: 'logged in!'
            }
        }
    }

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`)
        }
    }
}

