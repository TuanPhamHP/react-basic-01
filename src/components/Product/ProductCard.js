import React from 'react';

export default function ProductCard({ product = {} }) {
	return (
		<div className='col-3'>
			<div className='card h-100'>
				<img src={product.image} className='card-img-top' alt='...' />
				<div className='card-body'>
					<h5 className='card-title'>{product.name}</h5>
					<p className='card-text'>{product.description}</p>
					<a href='#' className='btn btn-success'>
						Buy Now
					</a>
				</div>
			</div>
		</div>
	);
}
