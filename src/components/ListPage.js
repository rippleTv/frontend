import React, { Component } from 'react';
import NavBar from '../common/navbar';
import ImageCard from '../common/imageCard';
import DropDown from '../common/dropdown';
import img1 from '../img/img.png';
import img2 from '../img/img1.png';
import img3 from '../img/img2.png';
import img4 from '../img/img3.png';

import Auth from '../utils/AuthService';
import MoviePreview from './MoviePreview';

class ListPage extends Component {
	state = {
		list: [],
		loading: false
	};

	componentDidMount() {
		this.setState({ loading: true });
		Auth.getUserList().then(response => {
			console.log(response);
			this.setState({ list: response.data, loading: false });
		});
	}
	render() {
		const { loading, list } = this.state;
		return (
			<div className="listpage">
				<div className="listpage__header">
					<NavBar giveClass="listpage__nav" />

					<div className="listpage__head">
						<h1>My List</h1>
						<p className="firstP">
							Create a playlist of your favourite movie and series
						</p>
						<p className="lastP">to form your very own library.</p>
					</div>
				</div>

				<div className="listpage__middle">
					{/* <div className="listpage__filter">
                        <h3>Category</h3>
                        <div className="listpage__drops">
                            My List <i onClick={() => this.handleDrop("my list")} className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    {this.state.displayGenre && <DropDown giveClass="list__dropdown" contents={["Drama", "Comedy", "Thriller"]}/>} */}
				</div>

				<div className="listpage--body">
					{loading && <span className="spinner"></span>}
					{!loading &&
						list.map(data => {
							// console.log(data.movie);
							if (data && data.movie && data.movie.image)
								return (
									<div style={{ margin: '0 10px' }}>
										<ImageCard movie={data.movie} />
									</div>
								);
							return null;
						})}
				</div>
			</div>
		);
	}
}

export default ListPage;
