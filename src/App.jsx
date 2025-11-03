import SideNav from './components/SideNav'
import TopBar from './components/TopBar'
import Connection from './components/Connection'
import BottomNav from './components/BottomNav' // 1. Import the new mobile nav

function App() {

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen min-w-full">

        <SideNav />

        <div className="flex-1 flex flex-col items-center gap-5">
          <TopBar />
          <Connection />
          
          <div className="h-20 md:hidden"></div>
        </div>


        <BottomNav />

      </div>
    </>
  )
}

export default App

