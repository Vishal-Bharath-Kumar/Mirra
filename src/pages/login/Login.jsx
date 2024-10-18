import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide,toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [, setIsPasswordInputFocused] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    var navigate = useNavigate();    
    const validatePassword = () => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
      return passwordRegex.test(Password);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent form submission
  
      if (!Username) {
        setUsernameError('Enter your username');
      } else {
        setUsernameError('');
      }
  
      if (!Password) {
        setPasswordError('Enter your password');
      } else if (!validatePassword()) {
        setPasswordError('Password must contain at least one uppercase letter, one digit, one special character, and be at least 8 characters long.');
      } else {
        setPasswordError('');
      }
  
      if (!usernameError && !passwordError) {
        const loginUser = { Username, Password };
        console.log(loginUser);
        const basicAuth = btoa(`${Username}:${Password}`);
  
        try {
          const response = await fetch(`https://api-qa.belcorp.biz/oauth/token`, {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${basicAuth}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:new URLSearchParams( {'grant_type': 'client_credentials'}),
          });
  
          if (!response.ok) {
            throw new Error('Login failed');
          }
        
          const data = await response.json();
          toast.success('LoggedIn Successfully');
          console.log('Login successfully', data);
          sessionStorage.setItem('token', data.access_token);
          setTimeout(() =>{
            navigate('/mirra-assistant');
          },1000)         
        } catch (error) {
          console.error('Login error:', error);
        }
      }
    };
  return (
    <>
    <div className="lg:flex">
      <div
        className="hidden lg:flex items-center justify-center bg-[url('https://esikaperu.vtexassets.com/assets/vtex.file-manager-graphql/images/773b8989-bc16-427a-82d6-c9636a2989ef___0ae9d5fdf4c70697db92f46df83626cc.jpg')] bg-cover p-4 flex-1 h-screen"
        style={{ borderBottomRightRadius: '450px' }}
      >
      </div>
      <div className="lg:w-10/12 xl:max-w-screen-sm">
        <div className="pt-8 pb-8 mt-20 bg-white-100 lg:bg-white flex justify-center lg:justify-center lg:px-10">
          <div className="cursor-pointer flex items-center">
            <div>
              <img src="https://esikaperu.vtexassets.com/assets/vtex.file-manager-graphql/images/00a489e2-0326-4869-86a1-2cb8d0248dc5___a634352da56b65b2a989562795e3d5ff.png" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="mt-10 px-10 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-5xl text-600 font-display font-semibold lg:text-start xl:text-4xl xl:text-bold">
            Login
          </h2>
          <div className="mt-12">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="text-sm font-bold text-gray-800 tracking-wide">Username</div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                  type="text"
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && <div className="error-message text-red-600">{usernameError}</div>}
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-800 tracking-wide">Password</div>
                </div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-red-500"
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordInputFocused(true)}
                  onBlur={() => setIsPasswordInputFocused(false)}
                />
                {passwordError && <div className="error-message text-red-600">{passwordError}</div>}
              </div>
              <div className="mt-10">
                <button
                  className="bg-red-600 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-700 shadow-lg"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer transition={Slide}/>
    </div>
    </>
  )
}

export default Login