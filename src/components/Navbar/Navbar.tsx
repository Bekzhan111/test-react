import { useState } from 'react';
import styles from './Navbar.module.scss';

const navLinks = [
	{ name: 'Главная', href: '#' },
	{ name: 'О нас', href: '#' },
	{ name: 'Услуги', href: '#' },
	{ name: 'Портфолио', href: '#' },
	{ name: 'Контакты', href: '#' },
];

export const Navbar = () => {
	const [active, setActive] = useState('Главная');

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__menu}>
				{navLinks.map((link) => (
					<li key={link.name}>
						<a
							href={link.href}
							className={`${styles.navbar__item} ${active === link.name ? styles.active : ''}`}
							onClick={() => setActive(link.name)}
						>
							{link.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
