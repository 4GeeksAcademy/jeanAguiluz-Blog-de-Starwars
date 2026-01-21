import { Link } from "react-router-dom";
import { useGlobalReducer } from '../hooks/useGlobalReducer';
import { FcFullTrash } from "react-icons/fc";
import PropTypes from "prop-types";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();
	const favorites = store?.favorites || [];

	const removeFav = (uid) => {
		dispatch({
			type: "REMOVE_FAVORITE",
			payload: uid
		})
	}

	return (

		<nav className="navbar navbar-expand-lg text-white">
			<div className="container">

				<Link className="navbar-brand" to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Star_Wars_Logo_2.svg"
						alt="Logo"
						style={{ height: "100px" }}
						className="d-block mx-auto mt-3"
					/>
				</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ms-auto d-flex align-items-center">
						<li className="nav-item dropdown me-3">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favoritos
							</a>

							<ul className="dropdown-menu me-0 bg-dark">
								{favorites.length === 0 && (
									<li>
										<span className="dropdown-item text-warning-emphasis">Add Favorites</span>
									</li>
								)}

								{favorites.map(fav => (
									<li key={fav.uid}>
										<span className="dropdown-item text-warning">
											{fav.name}

											<FcFullTrash className="me-2"
												style={{ cursor: "pointer" }}
												onClick={() => removeFav(fav.uid)} /></span>
									</li>
								))}


							</ul>
						</li>
					</ul>


					<div className="d-flex">
						<input id="search" className="me-2" name="search" type="text" placeholder="Buscador" aria-label="Search"/>
						<button className="btn btn-outline-warning">Buscar</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	favorites: PropTypes.array,
};