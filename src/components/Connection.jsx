import { useState } from "react";

function Connection() {
    const [status, setStatus] = useState(
        { isConnected: false }
    );
    const handleConnection = () => {
      setStatus(prevStatus => ({
        ...prevStatus, isConnected: !prevStatus.isConnected
      }));

    }
    
    return (
        <>
            <div className="bg-[#FFFFFF] w-[98%] p-4 flex rounded-md justify-between items-center shadow-sm">
                <div className="flex gap-2 items-center">
                    <div className={`w-3 h-3 rounded-full bg-gray-500 
                        ${status.isConnected ? "w-3 h-3 rounded-full bg-green-500" : "w-3 h-3 rounded-full bg-red-500"}`}>
                    </div>
                    <h2>Sentinel: {status.isConnected ? "Connected" : "Not Connected"}</h2>
                </div>
                <button onClick={handleConnection} className={` ${status.isConnected ? "bg-red-500 rounded px-4 py-2 text-white" : "bg-blue-500 rounded px-4 py-2 text-white"}`}>
                    {status.isConnected ? "Disconnect" : "Connect"}
                </button>
            </div>
        </>
    );
}
export default Connection;