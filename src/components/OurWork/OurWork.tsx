import { Navbar } from '@/components/Navbar/Navbar';
import WorkCardGrid from '@components/WorkCardGrid/WorkCardGrid.tsx';
import styles from './OurWork.module.scss';
import { useState } from 'react';

export const OurWork = () => {
	const [categoryActive, setCategory] = useState('Главная');

	console.log('categoryActive', categoryActive);
	return (
		<div className={styles.ourwork}>
			<h1>Наши Работы</h1>
			<p>Ознакомьтесь с нашими лучшими проектами в различных категориях</p>

			<Navbar setCategory={setCategory} />
			<WorkCardGrid category={categoryActive} />
		</div>
	);
};
