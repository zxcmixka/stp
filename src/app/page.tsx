'use client'; 
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const userKey = "DE5465C373E205919C117E3520716AF9"
  const steamID64 = "76561199060652524"

  const inventory = "https://steamcommunity.com/profiles/76561199060652524/inventory/json/730/2"
// все что я достал
// https://steamcommunity.com/profiles/76561199060652524/inventory/json/570/2 dota inventory
// https://store.steampowered.com/api/appdetails?appids=43190 рандомная игра которая как то связанна с вишлистом
  return (
    <div className="flex justify-center items-center h-screen bg--background">
      <h1 className="text-8xl textBit text-white no-select neon">
        Steam Assistant Hub
      </h1>

      
    </div>
  );
}