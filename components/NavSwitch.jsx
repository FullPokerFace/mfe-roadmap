// components/NavSwitch.jsx
import { Link, useLocation } from 'react-router-dom';

const NavSwitch = () => {
    const location = useLocation();

    const navItems = [
        { label: 'Migration FAQ & Guidelines', path: '/' },
        { label: 'Roadmap', path: '/roadmap' },
        { label: 'Known Issues', path: '/known-issues' },
    ];

    return (
        <div className='flex justify-center p-6'>
            <div className="inline-flex rounded-lg border border-gray-300 p-1 mb-4">
                {navItems.map((item) => (
                    <Link
                        to={item.path}
                        key={item.path}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${location.pathname === item.path
                                ? 'bg-blue-500 text-white'
                                : 'bg-transparent text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavSwitch;