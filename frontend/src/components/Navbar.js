import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
       
       
       <div>
       <Link to="/">
          <h1>Users managment</h1>
        </Link>
       </div>
     
        </div>  
      
     
    </header>
  )
} 

export default Navbar