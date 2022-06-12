import styles from "./Avatar.module.css";

export function Avatar(props) {
  const hasBorder = props.hasBorder != false 
  return (
    <img
      src={props.src}
      className={props.haBorder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
