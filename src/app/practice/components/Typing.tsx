"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const word = [
  "스타트",
  "ㄹ",
  "ㄴ",
  "ㅇ",
  "ㅁ",
  "ㄹ",
  "ㄴ",
  "ㅇ",
  "ㅁ",
  "ㄹ",
  "ㄴ",
  "ㅇ",
  "ㅁ",
  "끝",
];
const Typing = (props: any) => {
  const wordList = [...word];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = selectedIndex * 200;
    }
  }, [selectedIndex]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div style={{ padding: "100px" }}></div>
      <div className={styles.carousel_container}>
        <div className={styles.word_carousel} ref={carouselRef}>
          {wordList.map((word, index) => (
            <div
              key={index}
              className={`${styles.word_item} ${
                index === selectedIndex ? styles.selected : ""
              }`}
              onClick={() => handleItemClick(index)}>
              {word}
            </div>
          ))}
        </div>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default Typing;
