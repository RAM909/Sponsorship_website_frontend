import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'


const RoomPage = () => {
    const {roomId}=useParams();
    const mymeeting=async(e)=>{
        const appid=317816404;
        const serverSecret="7cf8763c4c1b57f0a3953bfd85150d91"
        const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(appid,serverSecret,roomId,Date.now().toString(),"Aniruddha Rawool")
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: e,
            sharedLinks:[
                {
                    name:"Copy Link",
                    url:`http://localhost:5173/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false,
        })

    }
  return (
    <div>
      <div ref={mymeeting}/>
    </div>
  )
}

export default RoomPage