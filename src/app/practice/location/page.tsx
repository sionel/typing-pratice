"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Key, data } from "./type";
import Button from "./components/Button";

const Location = () => {
  const [mode, setMode] = useState<Key>();

  const handleChangeMode = (mode: Key) => () => {
    setMode(mode);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {data.map((e, i) => (
          <Button
            key={i}
            onChangeMode={handleChangeMode}
            keyType={e.keys}
            name={e.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
