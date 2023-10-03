import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Comedy movies" />
      <Button name="Horror" />
      <Button name="Music" />
      <Button name="Cooking" />
      <Button name="Courses" />
      <Button name="Testing" />
      <Button name="Sc-fi" />
      <Button name="JavaScript" />
      <Button name="Algorithms" />
      <Button name="Sports" />
    </div>
  );
};

export default ButtonList;
