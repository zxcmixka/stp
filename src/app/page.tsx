// все что я достал
// https://steamcommunity.com/profiles/76561199060652524/inventory/json/730/2 cs 2 inventory
// https://steamcommunity.com/profiles/76561199060652524/inventory/json/570/2 dota inventory
// https://store.steampowered.com/api/appdetails?appids=43190 рандомная игра которая как то связанна с вишлистом

// тестовые проверка сторонего api и его вывод на страницу

'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const userKey = "DE5465C373E205919C117E3520716AF9";
  const steamID64 = "76561199060652524";
  const inventory = 'https://steamcommunity.com/profiles/76561199060652524/inventory/json/730/2';

  const fetchData = async () => {
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Добавляем задержку в 1 секунду
      const response = await fetch(inventory);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      setError(error.message || 'Не удалось получить данные.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg--background">
      <h1 className="text-8xl textBit text-white no-select neon">
        Steam Assistant Hub
      </h1>
    </div>
  );
}
