import './UserPage.scss'
import usersStore from '../Stores/usersStore'


function UserPage(){
    const userNameMassege = usersStore((state) => state.userNameMassege)
    return(
        <div className='Page'>
            <p>{'Hello '+ userNameMassege}</p>
        </div>
    )
}

export default UserPage