{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    }

    type FailState = {
        result: 'fail';
        reason: string
    }
    type LoginState = SuccessState | FailState

    function login(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!'
            }
        }
    }

    function printLoginState2(state: LoginState) {
        if (state.result === 'success') {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`)
        }
    }
}