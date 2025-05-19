import React, { useState } from "react";
import "../styling/Campus.css";
import NavSidebar from "./side-top-nav-bars";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Campus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const data = [
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" },
    { campusId: "01", campusCode: "Guntur", campusName: "Gardens Branch", campusType: "Active",code:"Updated", status: "D1", addressDno: "Z1", landmark: "PC1", location: "01", name: "Guntur", pin: "50214", principalMobile: "85522446", street: "Hanuman", cityId: "0213", countryId: "135" }

  ];



  //pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 16;


  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);


  const totalPages = Math.ceil(data.length / rowsPerPage);


  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };








  const handleViewClick = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavSidebar />


      <div className="head-table-container">
        <div className="inner-container">
          <div className="campus-header">
            <h2>Campus </h2>
            <div className="new">
             <div className="anotherstudent">
          <h1> Student Masters </h1>
        </div>
        <div className="another-search-bar">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
            </div>

            <div className="campus-controls">
              <button className="filter">
                <i className="fa-solid fa-filter" style={{ color: "#054447", padding: "4px" }}></i> Filter <span className="notification">1</span>
              </button>
              <button className="export">
                <i class="fa-solid fa-arrow-up" style={{ color: "#054447", padding: "4px" }}></i> Export
              </button>
              <button className="add-new-field">
                + Add New Field
              </button>
              
            </div>
          </div>

          <div className="campus-table-wrapper">
            <table className="campus-table">
              <thead>
                <tr>
                <th><input type="checkbox" /></th>
 
 
                
 
                  <th>Campus ID</th>
                  <th>Campus Code</th>
                  <th>Campus Name</th>
                  <th>Campus Type</th>
                  <th> Code</th>
                  <th>Status</th>
                  <th>Address Dno</th>
                  <th>Land Mark</th>
                  <th>Location</th>
                  <th>Name</th>
                  <th>PIN</th>
                  <th>Principal Mobile</th>
                  <th>Street</th>
                  <th>City ID</th>
                  <th>Country ID</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((campus, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{campus.campusId}</td>
                    <td>{campus.campusCode}</td>
                    <td>{campus.campusName}</td>
                    <td>{campus.campusType}</td>
                      <td>{campus.code}</td>
                    <td>{campus.status}</td>
                    <td>{campus.addressDno}</td>
                    <td>{campus.landmark}</td>
                    <td>{campus.location}</td>
                    <td>{campus.name}</td>
                    <td>{campus.pin}</td>
                    <td>{campus.principalMobile}</td>
                    <td>{campus.street}</td>
                    <td>{campus.cityId}</td>
                    <td>{campus.countryId}</td>
                    <td>
                      <button className="action-btn delete"><svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 4.99935H3.16667M3.16667 4.99935H16.5M3.16667 4.99935V16.666C3.16667 17.108 3.34226 17.532 3.65482 17.8445C3.96738 18.1571 4.39131 18.3327 4.83333 18.3327H13.1667C13.6087 18.3327 14.0326 18.1571 14.3452 17.8445C14.6577 17.532 14.8333 17.108 14.8333 16.666V4.99935H3.16667ZM5.66667 4.99935V3.33268C5.66667 2.89065 5.84226 2.46673 6.15482 2.15417C6.46738 1.84161 6.89131 1.66602 7.33333 1.66602H10.6667C11.1087 1.66602 11.5326 1.84161 11.8452 2.15417C12.1577 2.46673 12.3333 2.89065 12.3333 3.33268V4.99935M7.33333 9.16602V14.166M10.6667 9.16602V14.166" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      </button>
                      <button className="action-btn edit"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.167 2.5009C14.3859 2.28203 14.6457 2.10842 14.9317 1.98996C15.2176 1.87151 15.5241 1.81055 15.8337 1.81055C16.1432 1.81055 16.4497 1.87151 16.7357 1.98996C17.0216 2.10842 17.2815 2.28203 17.5003 2.5009C17.7192 2.71977 17.8928 2.97961 18.0113 3.26558C18.1297 3.55154 18.1907 3.85804 18.1907 4.16757C18.1907 4.4771 18.1297 4.7836 18.0113 5.06956C17.8928 5.35553 17.7192 5.61537 17.5003 5.83424L6.25033 17.0842L1.66699 18.3342L2.91699 13.7509L14.167 2.5009Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      </button>
                     <Link to='/view'> <button className="action-btn view" onClick={() => handleViewClick(campus)}><svg width="52" height="18" viewBox="0 0 52 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3623 8.86398C14.565 9.14798 14.6663 9.29065 14.6663 9.50065C14.6663 9.71132 14.565 9.85332 14.3623 10.1373C13.4517 11.4147 11.1257 14.1673 7.99967 14.1673C4.87301 14.1673 2.54767 11.414 1.63701 10.1373C1.43434 9.85332 1.33301 9.71065 1.33301 9.50065C1.33301 9.28998 1.43434 9.14798 1.63701 8.86398C2.54767 7.58665 4.87367 4.83398 7.99967 4.83398C11.1263 4.83398 13.4517 7.58732 14.3623 8.86398Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 9.5C10 8.96957 9.78929 8.46086 9.41421 8.08579C9.03914 7.71071 8.53043 7.5 8 7.5C7.46957 7.5 6.96086 7.71071 6.58579 8.08579C6.21071 8.46086 6 8.96957 6 9.5C6 10.0304 6.21071 10.5391 6.58579 10.9142C6.96086 11.2893 7.46957 11.5 8 11.5C8.53043 11.5 9.03914 11.2893 9.41421 10.9142C9.78929 10.5391 10 10.0304 10 9.5Z" stroke="#7B7B7B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20.6506 4.31818L23.6733 12.8892H23.7926L26.8153 4.31818H28.108L24.3693 14.5H23.0966L19.358 4.31818H20.6506ZM29.5348 14.5V6.86364H30.7081V14.5H29.5348ZM30.1314 5.59091C29.9027 5.59091 29.7055 5.51302 29.5398 5.35724C29.3774 5.20147 29.2962 5.0142 29.2962 4.79545C29.2962 4.5767 29.3774 4.38944 29.5398 4.23366C29.7055 4.07789 29.9027 4 30.1314 4C30.3601 4 30.5556 4.07789 30.718 4.23366C30.8838 4.38944 30.9666 4.5767 30.9666 4.79545C30.9666 5.0142 30.8838 5.20147 30.718 5.35724C30.5556 5.51302 30.3601 5.59091 30.1314 5.59091ZM36.0588 14.6591C35.323 14.6591 34.6883 14.4967 34.1547 14.1719C33.6243 13.8438 33.215 13.3864 32.9267 12.7997C32.6416 12.2098 32.4991 11.5237 32.4991 10.7415C32.4991 9.95928 32.6416 9.26989 32.9267 8.6733C33.215 8.07339 33.6161 7.60606 34.1298 7.27131C34.6468 6.93324 35.2501 6.7642 35.9395 6.7642C36.3372 6.7642 36.7299 6.83049 37.1177 6.96307C37.5055 7.09564 37.8585 7.31108 38.1767 7.60938C38.4949 7.90436 38.7484 8.29545 38.9373 8.78267C39.1262 9.26989 39.2207 9.86979 39.2207 10.5824V11.0795H33.3343V10.0653H38.0275C38.0275 9.63447 37.9413 9.25 37.769 8.91193C37.6 8.57386 37.358 8.30705 37.0431 8.11151C36.7316 7.91596 36.3637 7.81818 35.9395 7.81818C35.4721 7.81818 35.0678 7.93419 34.7264 8.16619C34.3883 8.39489 34.1281 8.69318 33.9458 9.06108C33.7636 9.42898 33.6724 9.82339 33.6724 10.2443V10.9205C33.6724 11.4972 33.7718 11.986 33.9707 12.3871C34.1729 12.7848 34.4529 13.0881 34.8109 13.2969C35.1689 13.5024 35.5848 13.6051 36.0588 13.6051C36.367 13.6051 36.6454 13.562 36.894 13.4759C37.1459 13.3864 37.363 13.2538 37.5453 13.0781C37.7276 12.8991 37.8684 12.6771 37.9679 12.4119L39.1014 12.7301C38.9821 13.1146 38.7815 13.4527 38.4998 13.7443C38.2181 14.0327 37.8701 14.258 37.4558 14.4205C37.0415 14.5795 36.5758 14.6591 36.0588 14.6591ZM42.7356 14.5L40.4089 6.86364H41.6419L43.2924 12.7102H43.372L45.0027 6.86364H46.2555L47.8663 12.6903H47.9458L49.5964 6.86364H50.8294L48.5027 14.5H47.3493L45.6788 8.63352H45.5595L43.889 14.5H42.7356Z" fill="#7B7B7B" />
                      </svg>
                      </button>

                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


          



          </div>

          



      </div>



      <div className="pagination-container">
              <button className="pagination-btn left-btn" onClick={goToPreviousPage} disabled={currentPage === 1}>
                ← Previous
              </button>

              <div className="page-numbers">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`page ${currentPage === i + 1 ? "active" : ""}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>


              <button className="pagination-btn right-btn" onClick={goToNextPage} disabled={currentPage === totalPages}>
                Next →
              </button>
            </div>

        </div>
       




      {/*         
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>×</button>
              <h3>View</h3>
              <form>
                <div className="form-group">
                  <label>Campus ID</label>
                  <input type="text" value={modalData.campusId} readOnly />
                </div>
                <div className="form-group">
                  <label>Campus Code</label>
                  <input type="text" value={modalData.campusCode} readOnly />
                </div>
                <div className="form-group">
                  <label>Campus Name</label>
                  <input type="text" value={modalData.campusName} readOnly />
                </div>
                <div className="form-group">
                  <label>Campus Type</label>
                  <input type="text" value={modalData.campusType} readOnly />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <input type="text" value={modalData.status} readOnly />
                </div>
                <div className="form-group">
                  <label>Address Dno</label>
                  <input type="text" value={modalData.addressDno} readOnly />
                </div>
                <div className="form-group">
                  <label>Land Mark</label>
                  <input type="text" value={modalData.landmark} readOnly />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" value={modalData.location} readOnly />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={modalData.name} readOnly />
                </div>
                <div className="form-group">
                  <label>PIN</label>
                  <input type="text" value={modalData.pin} readOnly />
                </div>
                <div className="form-group">
                  <label>Principal Mobile</label>
                  <input type="text" value={modalData.principalMobile} readOnly />
                </div>
                <div className="form-group">
                  <label>Street</label>
                  <input type="text" value={modalData.street} readOnly />
                </div>
                <div className="form-group">
                  <label>City ID</label>
                  <input type="text" value={modalData.cityId} readOnly />
                </div>
                <div className="form-group">
                  <label>Country ID</label>
                  <input type="text" value={modalData.countryId} readOnly />
                </div>
                <div className="modal-actions">
                  <button type="button" className="delete-btn">Delete</button>
                  <button type="button" className="edit-btn">Edit</button>
                </div>
              </form>
            </div>
          </div>
        )} */}


    </>
  );
}

export default Campus;