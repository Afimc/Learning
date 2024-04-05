import './Header.scss'
import usersStore from './Stores/usersStore'

function Header(){
    const isLoged = usersStore((state) => state.isLoged)
    const logOut = usersStore((state) => state.logOut)
    return(
        <div className="Header">
            <h1> MirkO</h1>
            {
                isLoged
                ? <button onClick={()=>logOut()}>LogOut</button>
                :null
            }
            
        </div>
    )
}

export default Header