import React, { useEffect, useRef, useState } from 'react';
import chaitanyaLogo from '../assets/srichaitanya-png.png';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import user from '../assets/Img.png';

function NavSidebar() {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [dragText, setDragText] = useState('▼ Drag up to see full menu');
  let isDragging = false;
  let startY;
  let initialHeight;

  useEffect(() => {
    const sidebar = sidebarRef.current;

    const startDrag = (e) => {
      if (e.target.closest('.menu-item')) return; // Prevent drag on menu items
      isDragging = true;
      startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
      initialHeight = sidebar.offsetHeight;
      document.body.style.userSelect = 'none';
      e.preventDefault();
    };

    const drag = (e) => {
      if (!isDragging) return;
      const currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
      const deltaY = startY - currentY;
      let newHeight = initialHeight + deltaY;

      // Update drag text based on direction
      if (deltaY > 0) {
        setDragText('Drag up to see full menu');
      } else if (deltaY < 0) {
        setDragText('Drag down to see full menu');
      }

      // Constrain height between 100px and 300px
      newHeight = Math.max(100, Math.min(300, newHeight));
      sidebar.style.height = `${newHeight}px`;
    };

    const stopDrag = () => {
      isDragging = false;
      document.body.style.userSelect = 'auto';
      // Set text based on final height
      if (sidebar.offsetHeight <= 100) {
        setDragText('Drag up to see full menu');
      } else {
        setDragText('Drag down to see full menu');
      }
    };

    if (sidebar) {
      sidebar.addEventListener('mousedown', startDrag);
      sidebar.addEventListener('touchstart', startDrag, { passive: false });
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag, { passive: false });
      document.addEventListener('mouseup', stopDrag);
      document.addEventListener('touchend', stopDrag);
    }

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('mousedown', startDrag);
        sidebar.removeEventListener('touchstart', startDrag);
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchend', stopDrag);
      }
    };
  }, []);

  return (
    <div className="layout-wrapper">
      {/* Top Navbar */}
      <header className="top-navbar">
        <div className="logo">
          <img src={chaitanyaLogo} alt="Sri Chaitanya Logo" />
        </div>

        <div className="search-container">
          <svg
            className="search-svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5056 14.4612L15.5047 14.4603L11.5088 10.446C12.333 9.39036 12.8287 8.05883 12.8287 6.61858C12.8287 3.15112 10.0077 0.330078 6.54033 0.330078C3.07299 0.330078 0.251953 3.15112 0.251953 6.61846C0.251953 10.0797 3.07299 12.9007 6.54033 12.9007C7.91898 12.9007 9.18902 12.4534 10.225 11.6964L14.2397 15.7172L14.2402 15.7177C14.4073 15.8913 14.6396 15.9764 14.8757 15.9764C15.3997 15.9764 15.7507 15.5761 15.7507 15.0831C15.7507 14.8397 15.6649 14.6269 15.5056 14.4612ZM1.5283 6.61846C1.5283 3.85436 3.77611 1.60642 6.54033 1.60642C9.30443 1.60642 11.5462 3.85424 11.5462 6.61846C11.5462 9.3765 9.30443 11.6243 6.54033 11.6243C3.77611 11.6243 1.5283 9.3765 1.5283 6.61846Z"
              fill="#A1A5B0"
              stroke="#A1A5B0"
              strokeWidth="0.125984"
            />
          </svg>
          <input type="text" placeholder="Ask for anything" className="search-input" />
        </div>

        <div className="nav-user-section">
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6251 18.2083H20.8334L19.3699 16.7449C18.9731 16.348 18.7501 15.8097 18.7501 15.2484V11.9583C18.7501 9.23705 17.0109 6.92197 14.5834 6.06397V5.70833C14.5834 4.55774 13.6507 3.625 12.5001 3.625C11.3495 3.625 10.4167 4.55774 10.4167 5.70833V6.06397C7.98926 6.92197 6.25008 9.23705 6.25008 11.9583V15.2484C6.25008 15.8097 6.02711 16.348 5.63022 16.7449L4.16675 18.2083H9.37508M15.6251 18.2083V19.25C15.6251 20.9759 14.226 22.375 12.5001 22.375C10.7742 22.375 9.37508 20.9759 9.37508 19.25V18.2083M15.6251 18.2083H9.37508"
              stroke="#3F3F46"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="profile-container">
            <img src= {user} alt="Profile" className="profile-pic" />
            <div className="profile-info">
              <div className="profile-id">HYD 256789</div>
              <div className="profile-role">Cashier</div>
            </div>
            <div className="dropdown-icon">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 7.5L10.5 12.5L15.5 7.5"
                  stroke="#344054"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="menu-icon">
          <Menu size={24} />
        </div>
      </header>

      {/* Side Navbar */}
      
      <aside className="sidebar" ref={sidebarRef}>
        <div className="drag-indicator"></div>
        <div className="drag-text">{dragText}</div>
        <h4 className="module-heading">Modules</h4>
        <ul className="menu">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <li className="menu-item active">
              <i className="fas fa-user-graduate"></i> Students
            </li>
          </Link>
          <li className="menu-item">
            <i className="fas fa-laptop"></i> Application
          </li>
          <li className="menu-item">
            <i className="fas fa-user-tie"></i> Employee
          </li>
          <li className="menu-item">
            <i className="fas fa-bus"></i> Fleet
          </li>
          <li className="menu-item">
            <i className="fas fa-warehouse"></i> Warehouse
          </li>
          <li className="menu-item">
            <i className="fas fa-sms"></i> SMS
          </li>
          <li className="menu-item">
            <i className="fas fa-question-circle"></i> Question Bank
          </li>
          <li className="menu-item">
            <i className="fas fa-boxes"></i> Assets Management
          </li>
          <li className="menu-item">
            <i className="fas fa-credit-card"></i> Payment Services
          </li>
          <li className="menu-item">
            <i className="fas fa-video"></i> CCTV
          </li>
          <li className="menu-item">
            <i className="fas fa-users-cog"></i> HRMS
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default NavSidebar;