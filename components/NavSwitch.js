// components/NavSwitch.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavSwitch = () => {
    const router = useRouter();

    const navItems = [
        { label: 'Migration FAQ & Guidelines', path: '/' },
        { label: 'Roadmap', path: '/roadmap' },
        { label: 'Known Issues', path: '/known-issues' },
    ];

    return (
        <div className='flex justify-center p-6'>
            <div className="inline-flex rounded-lg border border-gray-300 p-1 mb-4">
                {navItems.map((item) => (
                    <Link href={item.path} key={item.path}>
                        <a className={`px-4 py-2 rounded-md text-sm font-medium ${router.pathname === item.path
                            ? 'bg-blue-500 text-white'
                            : 'bg-transparent text-gray-700 hover:bg-gray-100'
                            }`}>
                            {item.label}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default NavSwitch;