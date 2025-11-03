import {
    HomeIcon,
    ChartBarIcon,
    MapPinIcon,
    ExclamationTriangleIcon,
    UserIcon
} from '@heroicons/react/24/solid'

function BottomNav() {
    return (

        <nav className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden">
            <ul className="flex justify-around items-center h-16">
                <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
                    <HomeIcon className="h-6 w-6" />
                    <span className="text-xs font-medium">Dashboard</span>
                </li>

                <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
                    <ChartBarIcon className="h-6 w-6" />
                    <span className="text-xs font-medium">Analytics</span>
                </li>

                <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
                    <MapPinIcon className="h-6 w-6" />
                    <span className="text-xs font-medium">Location</span>
                </li>

                <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
                    <ExclamationTriangleIcon className="h-6 w-6" />
                    <span className="text-xs font-medium">Alerts</span>
                </li>

                <li className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500">
                    <UserIcon className="h-6 w-6" />
                    <span className="text-xs font-medium">Profile</span>
                </li>
            </ul>
        </nav>
    );
}

export default BottomNav;
