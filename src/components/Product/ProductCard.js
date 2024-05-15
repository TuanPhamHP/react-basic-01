import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product = {} }) {
	return (
		<div className='col-3'>
			<div className='card h-100'>
				<img src={product.image} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{product.name}</h5>
					<p className='card-text'>{product.description}</p>
					<Link to={`/danh-sach-san-pham/${product.id}`} className='btn btn-success'>
						Buy Now
					</Link>
				</div>
			</div>
		</div>
	);
}
