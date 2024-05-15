import React from 'react';
import ProductCard from '../components/Product/ProductCard';
import Header from '../components/Header';
import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
	const listData = [
		{
			id: 1,
			name: 'Giày Trainer Dropset 2.0 Eartch',
			price: 3500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 2,
			name: 'Giày Trainer Dropset 2',
			price: 3500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 3,
			name: 'Giày Alphabounce+',
			price: 2400000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 4,
			name: 'Giày Galaxy 6',
			price: 1500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 5,
			name: 'Giày GAZELLE',
			price: 2500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
		{
			id: 6,
			name: 'Giày Ultraboost 1.0',
			price: 4500000,
			image:
				'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
			description: 'Đây là dataplaceholder của sản phẩm',
		},
	];

	const [searchParams, setSearchParams] = useSearchParams();

	const renderListProduct = () => {
		const listProductCard = listData.map((item, index) => {
			return <ProductCard key={item.id} product={item} />;
		});
		return listProductCard;
	};
	console.log(searchParams);
	console.log(searchParams.get('price'));
	return (
		<div className=' special-text'>
			<Header />
			<h2 className='my-5'>Danh sách sản phẩm</h2>
			<p>url search params: {searchParams} </p>
			<div className='row'>{renderListProduct()}</div>
		</div>
	);
}

//  searchParams - queryParams- ?key1=value1&key2=value2

// url params
