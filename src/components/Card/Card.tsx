import styles from './Card.module.scss';

interface CardProps {
	title?: string;
	children: React.ReactNode;
	className?: string;
}

export const Card: React.FC<CardProps> = ({
	title,
	children,
	className = '',
}) => {
	return (
		<div className={`${styles.card} ${className}`}>
			{title && <div className={styles.card__header}>{title}</div>}
			<div className={styles.card__body}>{children}</div>
		</div>
	);
};
