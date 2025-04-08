import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
root.render(  // Accommodate 연결
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

/*
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);  // 1000ms마다 새롭게 clock 컴포넌트를 rootdiv에 렌더링
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
