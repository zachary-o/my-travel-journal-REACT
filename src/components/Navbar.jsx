
import img from "../assets/images/Fill 213.png"

const Navbar = () => {
  return (
    <nav>
      <img src={img} alt="logo" className='logo'/>
      <h2>my travel journal.</h2>
    </nav>
  );
}

export default Navbar