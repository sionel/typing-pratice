import React from "react";
import { DataItem, Key } from "../type";
import styles from "../page.module.css";

interface ButtonProps {
  keyType: Key;
  name: string;
  onChangeMode: (key: Key) => () => void;
}

const Button: React.FC<ButtonProps> = ({ keyType, name, onChangeMode }) => {
  return (
    <div className={styles.mode} onClick={onChangeMode(keyType)}>
      {name}
    </div>
  );
};

export default Button;
