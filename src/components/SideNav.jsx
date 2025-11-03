import {
    HomeIcon,
    ChartBarIcon,
    MapPinIcon,
    ExclamationTriangleIcon,
    Cog6ToothIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import logo from '../assets/logo.png'

function SideNav() {
    return (
        <div className="hidden md:flex flex-col h-screen items-center w-72 bg-white shadow overflow-y-hidden border-r border-r-gray-200 ">
            <div className="mb-6 mt-8 mr-10 flex gap-4 q-full ">
                <img src={logo} alt="" />
                <div className="flex flex-col">
                    <h1 className='text-[20px] font-bold'>Sentinel</h1>
                    <p className='text-[16px] text-[#4B5563]'>Smart Helmet</p>
                </div>
            </div>
            <hr className="my-2 w-[90%] border-gray-200" />

            <nav className="w-full border-t border-gray-200">
                <span className="ml-7 text-[16px] text-gray-400">Main</span>
                <ul className="nav-list w-full px-4">
                    <li className="nav-item">
                        <HomeIcon className="icon-size" />
                        <span>Dashboard</span>
                    </li>
                    <li className="nav-item">
                        <ChartBarIcon className="icon-size" />
                        <span>Analytics</span>
                    </li>
                    <li className="nav-item">
                        <MapPinIcon className="icon-size" />
                        <span>Location HIstory</span>
                    </li>
                    <li className="nav-item">
                        <ExclamationTriangleIcon className="icon-size" />
                        <span>Emergency Contacts</span>
                    </li>
                </ul>
                <div className="my-4 border-t border-gray-200"></div>
                <ul className="nav-list w-full px-4">
                    <span className="ml-3 text-[16px] text-gray-400">Settings</span>
                    <li className="nav-item">
                        <Cog6ToothIcon className="icon-size" />
                        <span>Preferences</span>
                    </li>
                    <li className="nav-item">
                        <UserIcon className="icon-size" />
                        <span>Settings</span>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default SideNav;