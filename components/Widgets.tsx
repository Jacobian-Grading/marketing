import styles from "../styles/Widgets.module.scss";

interface ButtonProps {
  onClick?: any;
  color?: string;
  type?: any;
  children?: any;
}

const Button = (props: ButtonProps) => {
  let currentStyle = styles.buttonPrimary;
  switch (props.color) {
    case "primary":
      currentStyle = styles.buttonPrimary;
      break;
    case "secondary":
      currentStyle = styles.buttonSecondary;
      break;
  }
  return (
    <button className={currentStyle} {...props}>
      {props.children}
    </button>
  );
};

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange?: any;
  value?: any;
}

const ShortInput = (props: InputProps) => {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      className={styles.shortInput}
    />
  );
};

export { Button, ShortInput };
