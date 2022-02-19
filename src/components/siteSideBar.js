import { useState, useContext } from "react";
import { UserContext } from "./context";
import LoginLogoutButton from "./LoginLogoutButton";
import { NavLink } from "react-router-dom";
import "./siteSideBar.css";
export default function SiteSideBar() {
const ctx = useContext(UserContext);

  return (
    <>
    <div className="sidebar">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/deposit">Deposit</NavLink>
      <NavLink to="/withdraw">Withdraw</NavLink>
      <NavLink to="/alldata">Users</NavLink>
      <LoginLogoutButton />
    </div>
    </>
  );
}
