import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './pages/auth/Login';

const App = () => {
    const { user } = useAuth();

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={
                    <div className="text-center mt-10">
                        <h1 className="text-3xl font-bold text-blue-600">
                            ShopApp 🚀
                        </h1>
                        <p className="mt-4 text-gray-600">
                            {user ? `Welcome ${user.name}` : 'Please login'}
                        </p>
                    </div>
                } />
            </Routes>
        </div>
    );
};

export default App;