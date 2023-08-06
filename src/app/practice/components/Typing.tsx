"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const word = ["ㅓ", "ㅏ", "ㅣ", ";"];

const Typing = (props: any) => {
  const [wordList, setWordList] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const keyPressedRef = useRef(false); // 키가 눌려진 상태를 저장하는 ref

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const getWords = () => {
    const randomArray = Array(100)
      .fill(0)
      .map(() => getRandomElement(word));

    setWordList(randomArray);
  };

  useEffect(() => {
    if (!wordList.length) getWords();
  }, [wordList]);

  const getRandomElement = (arr: string[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {

    const value = e.target.value;
    if (wordList[selectedIndex].length === value.length) {
      if (wordList[selectedIndex] === value) {
        setSelectedIndex(selectedIndex + 1);
        setInputValue("");
      } else {
        setInputValue("");
      }
    } else {
      setInputValue(e.target.value);
    }
  };
  const handleKeyDownInput: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!keyPressedRef.current) {
      keyPressedRef.current = true;
    } else {
      e.preventDefault();
    }
  };

  const handleKeyUpInput = () => {
    keyPressedRef.current = false;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "100px" }}></div>
      <div className={styles.carousel_container}>
        <div
          className={styles.word_carousel}
          ref={carouselRef}
          style={{ left: `calc(50% - 200px - ${selectedIndex * 450}px)` }}
        >
          {wordList.map((word, index) => (
            <div
              key={index}
              className={`${styles.word_item} ${
                index === selectedIndex ? styles.selected : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {word}
            </div>
          ))}
        </div>
      </div>
      <input
        className={styles.centered_input}
        type="text"
        onChange={handleChangeInput}
        onKeyDown={handleKeyDownInput}
        onKeyUp={handleKeyUpInput}
        value={inputValue}
      />
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default Typing;
