


function onDisconnect(){
    console.log('disconnect')
}

function onMessage(msg,UserName,socket, ioEmit){
    console.log(UserName)
    const message = {
        text: msg,
        user: UserName,
        time: new Date()
        
    }
    ioEmit("new-message",message)
}

module.exports = {onDisconnect, onMessage}