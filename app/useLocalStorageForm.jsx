"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const useLocalStorageForm = (key, initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, [key]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    const updatedData = { ...formData, ...data }; 
    localStorage.setItem(key, JSON.stringify(updatedData));
    setFormData(updatedData);
  };

  return { register, handleSubmit, errors, onSubmit, formData };
};

export default useLocalStorageForm;
