//фаил DB.json който е арей с обекти с потребители, парола имеил .....
//да има стор който съдържа стейт за  проверка дали е логнат или не
//папка pages в която да има 2 страници login i user 
//в апп зимаш резултата рендърва една от двете страници 
//трябва да хваща съобщения за грешки ако е грешно името или паролата 
//да има хедър който винаги стои отгоре .най отгоре в дясно на хедъра ако е логнат ще има бутон логаут
import React from 'react'
import './App.scss'
import usersStore from './Stores/usersStore'
import Header from './Header'
import LoginPage from './Pages/LoginPage'
import UserPage from './Pages/UserPage'




function App() {
  const isLoged = usersStore((state) => state.isLoged)


  return (
    <div className='App'>
      <Header/>
      <>
        {
          !isLoged
            ? <LoginPage/>
            : <UserPage/>
        }
      </>
    </div>

  )
}

export default App
