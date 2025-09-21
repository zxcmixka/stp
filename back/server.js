import mongoose from "mongoose";
import express from "express";

const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mixka:pakookap@stp.djsvi2g.mongodb.net/?retryWrites=true&w=majority&appName=stp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

  const connect = async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://mixka:pakookap@stp.djsvi2g.mongodb.net/?retryWrites=true&w=majority&appName=stp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = { connect };