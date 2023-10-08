import { useReducer } from 'react';
import userReducer from './UserReducer';
import UserContext from './UserContext';
import { user_actions } from './UserReducer';

function UserProvider({ children }) {
   const initialUserState = {
      user: {},
      loginStatus: false,
   };
   const [userState, dispatch] = useReducer(userReducer, initialUserState);

   const signup = (data) => {
      dispatch({ type: user_actions.SIGNUP, payload: data });
      console.log(data);
   };

   const login = (data) => {
      dispatch({ type: user_actions.LOGIN, payload: data });
      console.log(data);
   };

   const Logout = (data) => {
      dispatch({ type: user_actions.LOGOUT, payload: data });
      console.log(data);
   };
   
   console.log(userState.loginStatus)
   const userValue = {
      loginStatus: userState.loginStatus,
      userData: userState,
      exitAccount: Logout,
      accessAccount: login,
      createAccount: signup,
   };

   return (
      <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
   );
}

export default UserProvider;
