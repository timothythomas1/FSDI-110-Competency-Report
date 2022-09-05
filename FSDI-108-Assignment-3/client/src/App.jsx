import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/Catalog';
import AboutMe from './components/AboutMe';
import ShoppingList from './components/ShoppingList';
import Home from './components/Home';
import Cart from './components/Cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin';
import GlobalState from './store/globalState';

function App() {
	return (

		< div className="App" >
			<GlobalState>

				<BrowserRouter>
					<NavBar />

					<div className="main">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/catalog" element={<Catalog />} />
							<Route path="/about" element={<AboutMe />} />
							<Route path="/list" element={<ShoppingList />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/admin" element={<Admin />} />
						</Routes>
					</div>

					<Footer />
				</BrowserRouter>

			</GlobalState>
		</ div >
	);
}

export default App;
