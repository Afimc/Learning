import './Header.scss'
import usersStore from './Stores/usersStore'

function Header(){
    const userNameMassege = usersStore((state) => state.userNameMassege)
    const isLoged = usersStore((state) => state.isLoged)
    const logOut = usersStore((state) => state.logOut)
    return(
        <div className="Header">
            <h1> MirkO</h1>
            {
                isLoged
                ?<>
                <p>{userNameMassege}</p>
                <button onClick={()=>logOut()}>LogOut</button>
                </>
                
                  
                :null
            }
            
        </div>
    )
}

export default Header