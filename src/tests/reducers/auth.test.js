import authReducer from '../../reducers/auth';

test('should setup auth reducer', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
})

test('should login properly', () => {
    const uid = 'ewqek23123';
    const action = {
        type:'LOGIN',
        uid
    }
    const state = authReducer({},action);
    expect(state).toEqual({
        uid
    })
})

test('should logout properly', () => {
    const uid = 'eokdsadko212';
    const user = {
        uid
    }
    const action = { type:'LOGOUT'};
    const state = authReducer(user,action);
    expect(state).toEqual({})
})