import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css'; // Pastikan jalur ini benar sesuai dengan struktur proyek Anda

function MyCalendar() {
const calendarRef = useRef(null);

useEffect(() => {
    const calendarEl = calendarRef.current;

    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth'
    });

    calendar.render();

    // Add CSS classes to specific elements
    const calendarHeader = calendarEl.querySelector('.fc-toolbar');
    const calendarBody = calendarEl.querySelector('.fc-view');

    if (calendarHeader) {
        calendarHeader.classList.add('calendar-header');
    }

    if (calendarBody) {
        calendarBody.classList.add('calendar-body');
    }

    return () => {
        calendar.destroy();
    };
}, []);

return (
    <div className="calendar-container">
        <div ref={calendarRef}></div>
    </div>
);
}

export default MyCalendar;
