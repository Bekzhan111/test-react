import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Navbar.module.scss';

const navLinks = [
	{ name: 'Главная', href: '/' },
	{ name: 'О нас', href: '/' },
	{ name: 'Услуги', href: '/' },
	{ name: 'Портфолио', href: '/' },
	{ name: 'Контакты', href: '/' },
];

interface NavbarProps {
	setCategory: Dispatch<SetStateAction<string>>;
}

// Correctly destructure props here
export const Navbar = ({ setCategory }: NavbarProps) => {
	const [active, setActive] = useState('Главная');

	console.log('active navbar:', active);
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__menu}>
				{navLinks.map((link) => (
					<li key={link.name}>
						<a
							className={`${styles.navbar__item} ${active === link.name ? styles.active : ''}`}
							onClick={(e) => {
								e.preventDefault();
								console.log('Clicked:', link.name);
								setActive(link.name);
								setCategory(link.name);
							}}
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
