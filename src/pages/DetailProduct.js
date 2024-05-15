import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function DetailProduct() {
	const { productId } = useParams();
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

	const [loadingDetail, setLoadingDetail] = useState(true);
	const [detailData, setDetailData] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			const result = listData.find(product => product.id === +productId);
			setDetailData(result);
			setLoadingDetail(false);
		}, 800);
	}, []);

	return (
		<div>
			<Header />
			<h1>Chi tiết sản phẩm:</h1>
			{!detailData ? (
				loadingDetail ? (
					<>Loading product ...</>
				) : (
					<>No data found - Try again</>
				)
			) : (
				<div
					className='card h-100'
					style={{
						width: '250px',
					}}
				>
					<img src={detailData.image} className='card-img-top' alt='...' />
					<div className='card-body'>
						<h5 className='card-title'>{detailData.name}</h5>
						<p className='card-text'>{detailData.description}</p>
					</div>
				</div>
			)}
		</div>
	);
}

// /danh-sach-san-pham/1
