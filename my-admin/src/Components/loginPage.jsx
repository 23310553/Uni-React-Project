import { Login, LoginForm, CreateButton } from 'react-admin';
import { Typography } from '@mui/material';
import './component.css';


/* Creating a custom Login Page with a background image that changes with each refresh
and a button for creating an application. */
export const LoginPage = (props) => (
    <Login {...props} 
        // A random image that changes everyday
        backgroundImage="https://source.unsplash.com/random?property" >
        <LoginForm {...props} />
        {/* Added button to take a brand new user to user create form */}
        <Typography variant="h6" textAlign="center" marginBottom="2vh"> Don't have an account?</Typography>
        <CreateButton label="Create one here" resource='Users' className='css-1eydo2n-MuiButtonBase-root-MuiButton-root'/>
  </Login>
);

// import { useState } from 'react';
// import { useLogin, useNotify, Notification } from 'react-admin';
// import './login.css'

// export const LoginPage = ({ theme }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const login = useLogin();
//     const notify = useNotify();

//     const handleSubmit = e => {
//         e.preventDefault();
//         login({ email, password }).catch(() =>
//             notify('Invalid email or password')
//         );
//     };

//     return (
//             <body className='login'>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         name="email"
//                         type="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                     <input
//                         name="password"
//                         type="password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                     />
//                 </form>
//             </body>
//     );
// };



