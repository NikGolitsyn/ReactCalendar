import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import {
  getWeekStartDate,
  generateWeekRange,
  months,
  getMonths,
} from "./utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [modalState, setModalState] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const currentDate = new Date(weekStartDate).getDate();

  getMonths(weekDates, weekStartDate, months);

  const prevWeekHandler = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(currentDate - 7)));
  };

  const nextWeekHandler = () => {
    setWeekStartDate(new Date(weekStartDate.setDate(currentDate + 7)));
  };

  const toCurrentWeekHandler = () => {
    setWeekStartDate(new Date());
  };

  const createTaskHandler = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <Header
        prevWeek={prevWeekHandler}
        nextWeek={nextWeekHandler}
        currentWeek={toCurrentWeekHandler}
        weekStartDate={weekStartDate}
        weekDates={weekDates}
        onToggle={createTaskHandler}
      />
      <Calendar
        weekDates={weekDates}
        modalState={modalState}
        onToggle={createTaskHandler}
      />
    </>
  );
};

export default App;
