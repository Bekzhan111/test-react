import { FC } from 'react';
import s from './HomePage.module.scss';
import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import { Navbar } from '@/components/Navbar/Navbar';
import { Tag } from '@/components/Tag/Tag';

export const HomePage: FC = () => {
	return (
		<div className={s.wrap}>
			<Button variant="primary">Подробнее</Button>
			<Card title="Креативный дизайн">
				<p>
					Мы создаем уникальные дизайны, которые отражают индивидуальность
					вашего бренда и привлекают внимание целевой аудитории.
				</p>
			</Card>
			<Navbar />
			<Tag>Дизайн</Tag>
			<Tag>Разработка</Tag>
			<Tag>Оптимизация</Tag>
		</div>
	);
};
