import Card from "../components/Card";
import Products from "../components/Home/Products";
import '../components/css/card.css'
import Nav from "../components/Nav";
import './paginate.css';

function GalleryHome() {
    return ( 
        <>
            <Nav/>
           <Products/>
        </>
     );
}

export default GalleryHome;