import React from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./style.css";
import { HomeWork } from "@material-ui/icons";

export const SidebarData = [
  {
    url: "/",
    name: "Нүүр хуудас",
    icon: <HomeWork></HomeWork>,
    id: 1,
  },
  {
    url: "/api/invoice",
    name: "Нэхэмжлэл үүсгэх",
    icon: <NoteAddIcon></NoteAddIcon>,
    id: 2,
  },
  {
    url: "/api/inquiry",
    name: "Гүйлгээ шалгах",
    icon: <AssignmentTurnedInIcon></AssignmentTurnedInIcon>,
    id: 3,
  },
  {
    url: "/api/pay",
    name: "Токеноор гүйлгээ хийх",
    icon: <AccountBalanceIcon></AccountBalanceIcon>,
    id: 4,
  },
];

export default SidebarData;
