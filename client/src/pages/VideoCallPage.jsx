import React, { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000")

const VideoCallPage = () => {
	useEffect(() => {
		socket.emit("send_message", {message: "Hello There"})
	}, [])
	return <>
		<div className="h-[88vh] bg-slate-100 grid grid-cols-4 p-5 gap-5">
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
			<div className="h-auto w-full bg-white rounded-2xl">
			</div>
		</div>
		<div className="bg-slate-50 h-20 px-10 flex items-center justify-between">
			{/* about you and meeting code block */}
			<div>
				12:49 PM | min-wexq-wsp
			</div>

			{/* button for video call  */}
			<div className="flex items-center justify-center space-x-5">
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
</svg>

				</button>
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>

				</button>
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
</svg>

				</button>
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>


				</button>
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>

				</button>
			</div>
			
			{/* button for video call  */}
			<div className="flex items-center justify-center space-x-5">
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
					M
				</button>
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
					M
				</button>
				<button className="bg-gray-200 h-10 w-10 p-2 rounded-full">
					M
				</button>
			</div>
		</div>
	</>;
};

export default VideoCallPage;
