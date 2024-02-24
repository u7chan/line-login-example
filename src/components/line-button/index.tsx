import styles from './styles.module.css'

type Props = {
  onClick?: () => void
}

export function LineButton({ onClick }: Props) {
  return <button className={styles.root} onClick={onClick}></button>
}
