import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import HeadphonesIcon from "../assets/headphones.jsx";
import ChartIcon from "../assets/chartIcon.jsx";
import BuildingIcon from "../assets/buildingIcon.jsx";
import LaptopIcon from "../assets/laptopIcon.jsx";
import FolderIcon from "../assets/folderIcon.jsx";
import RotateIcon from "../assets/rotateIcon.jsx";
import { Star, Shield, FlashOn } from "@mui/icons-material"; // Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  CheckCircle,
  Build,
  GridView,
  Chat,
  StarBorder,
  Person,
} from "@mui/icons-material"; 
export const data = [
  {
    icon: <SchoolIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    text: "3 years of training",
  },
  {
    icon: <VerifiedIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    text: "100% quality assurance",
  },
  {
    icon: <GroupsIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    text: "10 years of experience",
  },
  {
    icon: <PersonIcon fontSize="large" sx={{ color: "#1976d2" }} />,
    text: "1 training provider",
  },
];
export const services = [
  {
    title: "Time Management",
    icon: <HeadphonesIcon />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    title: "Staff Trainings",
    icon: <ChartIcon />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    title: "Learning from Experts",
    icon: <BuildingIcon />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    title: "Increase Efficiency",
    icon: <LaptopIcon />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    title: "Increase Productivity",
    icon: <FolderIcon />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
  {
    title: "Quality Assurance",
    icon: <RotateIcon />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.",
  },
];
export const testimonials = [
  {
    name: "David Gillroy",
    feedback:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
    rating: 5,
  },
  {
    name: "Kyle Showdole",
    feedback:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
    rating: 4,
  },
  {
    name: "Milla Holland",
    feedback:
      "Nowadays, it isn’t great uncommon to see lenders rapidly adopting",
    rating: 5,
  },
];
export const benefits = [
  {
    icon: <Star sx={{ color: "#2B82C0" }} />,
    title: "Intuitive User Interface",
  },
  {
    icon: <Shield sx={{ color: "#2B82C0" }} />,
    title: "Real-Time Updates ",
    description:
      "Keeping users informed in real-time about their appointments was a key feature. This functionality allowed for dynamic adjustments, ensuring flexibility for users in managing their schedules effectively.  ",
  },
  {
    icon: <FlashOn sx={{ color: "#2B82C0" }} />,
    title: "Robust Reward System",
  },
  {
    icon: <CalendarMonthIcon sx={{ color: "#2B82C0" }} />,
    title: "Advanced Schedule Management",
  },
];

export const values = [
  {
    title: "C - Communication",
    description:
      "Effortlessly tailor your website to match your unique vision.",
    icon: <Chat fontSize="large" sx={{ color: "#2B82C0" }} />,
  },
  {
    title: "U - Understand",
    description:
      "Empower your project with our extensive and customizable collection.",
    icon: <GridView fontSize="large" sx={{ color: "#2B82C0" }} />,
  },
  {
    title: "B - Build",
    description:
      "Effortlessly incorporate and integrate essential features seamlessly.",
    icon: <Build fontSize="large" sx={{ color: "#2B82C0" }} />,
  },
  {
    title: "E - Engage",
    description:
      "Delight and captivate your customers with seamless and intuitive interfaces.",
    icon: <CheckCircle fontSize="large" sx={{ color: "#2B82C0" }} />,
  },
];