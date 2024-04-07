import { useEffect, useState } from "react"
import usersStore from '../Stores/usersStore'
import { socket } from "../sockets"
import './UserPage.scss'



function UserPage() {
    const UserName = usersStore((state) => state.userName)
    const [chat, setChat] = useState([])
    const [input, setInput] = useState('')

    
    useEffect(() => {
        socket.connect()
        return () => {
            socket.disconnect()
        }
    }, [])

    useEffect(() => {
        socket.on('new-message', (message) => {
            const newChat = [message,...chat]
            setChat(newChat)
        })

        return () => {
            socket.off('new-message')
        }
    }, [chat])

   

    function sendMessage(event) {
        if (event.key === 'Enter') {
            const message = input
            socket.emit('message', message,UserName)
            setInput('')
        }
        if (event.key==='ArrowUp'){
            const lastMessage = chat.find(i=>UserName===i.user)
            setInput(lastMessage.text)
        }
    }

    return (
        <div className='chat' >
            <div className="history" >
                {
                    chat.map((m, i) => {
                        return <p className={UserName===m.user?'msg myMessage':'msg'} key={i}>{m.time}:{m.user}:{m.text}</p>
                    })
                }
            </div>
            <input id='input' value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={sendMessage}></input>
        </div>
    )
}

export default UserPage
