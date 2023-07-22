import React from "react";
import { useNavigate } from "react-router";

let instance = useNavigate();

export const navigate = (param) => {
    instance(param);
};