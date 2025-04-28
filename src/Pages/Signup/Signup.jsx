
// import React, { useState } from 'react';
// // import './Signup.css'; // Import the CSS file for styling

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost/php/signup.php', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password, email })
//         });
//         const data = await response.json();
//         setMessage(data.message);
//     };

//     return (
//         <div className="auth-container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit} className="auth-form">
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//             {message && <p className="message">{message}</p>}
//         </div>
//     );
// }

// export default Signup;

import React, { useState } from 'react';

function Signin() {
    const [isSignup, setIsSignup] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isSignup ? 'http://localhost/project/signup.php' : 'http://localhost/project/login.php';
        const body = isSignup ? { username, password, email } : { username, password };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessage(data.message);

            // Display alert box with the message
            alert(data.message);
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <h2>{isSignup ? 'Signup' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                {isSignup && (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                )}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Already have an account? Login' : 'Need an account? Signup'}
            </p>
        </div>
    );
}

export default Signin;

