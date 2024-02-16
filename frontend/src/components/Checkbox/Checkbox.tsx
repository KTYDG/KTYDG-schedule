import styles from './Checkbox.module.css';

export const Checkbox = ({...props}) => {
  return (
    <label className={styles.container}>
      <input type="checkbox" {...props}/>
      <span className={styles.checkmark}></span>
    </label>
  )
}
