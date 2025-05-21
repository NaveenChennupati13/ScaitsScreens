import React, { useEffect, useRef, useState } from "react";
import "../styling/Campus.css";
import NavSidebar from "./side-top-nav-bars";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Campus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
  const tableContainerRef = useRef(null); // Ref for the table container

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
  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (tableContainerRef.current) {
        // Check if scroll position is greater than a threshold (e.g., 50px)
        setIsScrolled(tableContainerRef.current.scrollTop > 50);
      }
    };

    const container = tableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <NavSidebar />


    <div className="head-table-container" ref={tableContainerRef}>
        <div className="inner-container">
          <div className="campus-header">
            
            <h2>Campus </h2>
            
             
          
              <svg width="95" height="39" viewBox="0 0 95 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="94" height="38" rx="19" fill="white"/>
<rect x="0.5" y="0.5" width="94" height="38" rx="19" stroke="#DCDCDC"/>
<path d="M18.6667 25.3333C21.7963 25.3333 24.3333 22.7963 24.3333 19.6667C24.3333 16.5371 21.7963 14 18.6667 14C15.5371 14 13 16.5371 13 19.6667C13 22.7963 15.5371 25.3333 18.6667 25.3333Z" stroke="#0A0A0A" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.7498 26.7509L22.704 23.7051" stroke="#0A0A0A" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.3438 18C39.2969 17.6042 39.1068 17.2969 38.7734 17.0781C38.4401 16.8594 38.0313 16.75 37.5469 16.75C37.1927 16.75 36.8828 16.8073 36.6172 16.9219C36.3542 17.0365 36.1484 17.194 36 17.3945C35.8542 17.5951 35.7813 17.8229 35.7813 18.0781C35.7813 18.2917 35.832 18.4753 35.9336 18.6289C36.0378 18.7799 36.1706 18.9062 36.332 19.0078C36.4935 19.1068 36.6628 19.1888 36.8398 19.2539C37.0169 19.3164 37.1797 19.3672 37.3281 19.4062L38.1406 19.625C38.349 19.6797 38.5807 19.7552 38.8359 19.8516C39.0938 19.9479 39.3398 20.0794 39.5742 20.2461C39.8112 20.4102 40.0065 20.6211 40.1602 20.8789C40.3138 21.1367 40.3906 21.4531 40.3906 21.8281C40.3906 22.2604 40.2773 22.651 40.0508 23C39.8268 23.349 39.4987 23.6263 39.0664 23.832C38.6367 24.0378 38.1146 24.1406 37.5 24.1406C36.9271 24.1406 36.431 24.0482 36.0117 23.8633C35.5951 23.6784 35.2669 23.4206 35.0273 23.0898C34.7904 22.7591 34.6563 22.375 34.625 21.9375H35.625C35.651 22.2396 35.7526 22.4896 35.9297 22.6875C36.1094 22.8828 36.3359 23.0286 36.6094 23.125C36.8854 23.2187 37.1823 23.2656 37.5 23.2656C37.8698 23.2656 38.2018 23.2057 38.4961 23.0859C38.7904 22.9635 39.0234 22.7943 39.1953 22.5781C39.3672 22.3594 39.4531 22.1042 39.4531 21.8125C39.4531 21.5469 39.3789 21.3307 39.2305 21.1641C39.082 20.9974 38.8867 20.862 38.6445 20.7578C38.4023 20.6536 38.1406 20.5625 37.8594 20.4844L36.875 20.2031C36.25 20.0234 35.7552 19.7669 35.3906 19.4336C35.026 19.1003 34.8438 18.6641 34.8438 18.125C34.8438 17.6771 34.9648 17.2865 35.207 16.9531C35.4518 16.6172 35.7799 16.3568 36.1914 16.1719C36.6055 15.9844 37.0677 15.8906 37.5781 15.8906C38.0938 15.8906 38.5521 15.9831 38.9531 16.168C39.3542 16.3503 39.6719 16.6003 39.9062 16.918C40.1432 17.2357 40.2682 17.5964 40.2813 18H39.3438ZM44.308 24.125C43.7299 24.125 43.2312 23.9974 42.8119 23.7422C42.3953 23.4844 42.0736 23.125 41.8471 22.6641C41.6231 22.2005 41.5111 21.6615 41.5111 21.0469C41.5111 20.4323 41.6231 19.8906 41.8471 19.4219C42.0736 18.9505 42.3888 18.5833 42.7924 18.3203C43.1986 18.0547 43.6726 17.9219 44.2143 17.9219C44.5268 17.9219 44.8354 17.974 45.1401 18.0781C45.4447 18.1823 45.7221 18.3516 45.9721 18.5859C46.2221 18.8177 46.4213 19.125 46.5697 19.5078C46.7182 19.8906 46.7924 20.362 46.7924 20.9219V21.3125H42.1674V20.5156H45.8549C45.8549 20.1771 45.7872 19.875 45.6518 19.6094C45.519 19.3437 45.3289 19.1341 45.0815 18.9805C44.8367 18.8268 44.5476 18.75 44.2143 18.75C43.8471 18.75 43.5294 18.8411 43.2611 19.0234C42.9955 19.2031 42.7911 19.4375 42.6479 19.7266C42.5046 20.0156 42.433 20.3255 42.433 20.6562V21.1875C42.433 21.6406 42.5111 22.0247 42.6674 22.3398C42.8263 22.6523 43.0463 22.8906 43.3276 23.0547C43.6088 23.2161 43.9356 23.2969 44.308 23.2969C44.5502 23.2969 44.769 23.263 44.9643 23.1953C45.1622 23.125 45.3328 23.0208 45.476 22.8828C45.6192 22.7422 45.7299 22.5677 45.808 22.3594L46.6986 22.6094C46.6049 22.9115 46.4473 23.1771 46.226 23.4062C46.0046 23.6328 45.7312 23.8099 45.4057 23.9375C45.0802 24.0625 44.7143 24.125 44.308 24.125ZM49.8944 24.1406C49.5142 24.1406 49.1691 24.069 48.8592 23.9258C48.5493 23.7799 48.3032 23.5703 48.1209 23.2969C47.9386 23.0208 47.8475 22.6875 47.8475 22.2969C47.8475 21.9531 47.9152 21.6745 48.0506 21.4609C48.186 21.2448 48.367 21.0755 48.5936 20.9531C48.8201 20.8307 49.0701 20.7396 49.3436 20.6797C49.6196 20.6172 49.897 20.5677 50.1756 20.5313C50.5402 20.4844 50.8358 20.4492 51.0623 20.4258C51.2915 20.3997 51.4582 20.3568 51.5623 20.2969C51.6691 20.237 51.7225 20.1328 51.7225 19.9844V19.9531C51.7225 19.5677 51.617 19.2682 51.4061 19.0547C51.1978 18.8411 50.8813 18.7344 50.4569 18.7344C50.0168 18.7344 49.6717 18.8307 49.4217 19.0234C49.1717 19.2161 48.9959 19.4219 48.8944 19.6406L48.0194 19.3281C48.1756 18.9635 48.384 18.6797 48.6444 18.4766C48.9074 18.2708 49.1938 18.1276 49.5037 18.0469C49.8162 17.9635 50.1235 17.9219 50.4256 17.9219C50.6183 17.9219 50.8397 17.9453 51.0897 17.9922C51.3423 18.0365 51.5858 18.1289 51.8201 18.2695C52.0571 18.4102 52.2537 18.6224 52.41 18.9062C52.5662 19.1901 52.6444 19.5703 52.6444 20.0469V24H51.7225V23.1875H51.6756C51.6131 23.3177 51.509 23.457 51.3631 23.6055C51.2173 23.7539 51.0233 23.8802 50.7811 23.9844C50.5389 24.0885 50.2433 24.1406 49.8944 24.1406ZM50.035 23.3125C50.3996 23.3125 50.7069 23.2409 50.9569 23.0977C51.2095 22.9544 51.3996 22.7695 51.5272 22.543C51.6574 22.3164 51.7225 22.0781 51.7225 21.8281V20.9844C51.6834 21.0312 51.5975 21.0742 51.4647 21.1133C51.3345 21.1497 51.1834 21.1823 51.0116 21.2109C50.8423 21.237 50.6769 21.2604 50.5155 21.2812C50.3566 21.2995 50.2277 21.3151 50.1287 21.3281C49.8892 21.3594 49.6652 21.4102 49.4569 21.4805C49.2511 21.5482 49.0845 21.651 48.9569 21.7891C48.8319 21.9245 48.7694 22.1094 48.7694 22.3437C48.7694 22.6641 48.8879 22.9062 49.1248 23.0703C49.3644 23.2318 49.6678 23.3125 50.035 23.3125ZM54.261 24V18H55.1516V18.9062H55.2141C55.3235 18.6094 55.5214 18.3685 55.8079 18.1836C56.0943 17.9987 56.4172 17.9062 56.7766 17.9062C56.8443 17.9062 56.929 17.9076 57.0305 17.9102C57.1321 17.9128 57.2089 17.9167 57.261 17.9219V18.8594C57.2297 18.8516 57.1581 18.8398 57.0461 18.8242C56.9368 18.806 56.8209 18.7969 56.6985 18.7969C56.4068 18.7969 56.1464 18.8581 55.9172 18.9805C55.6907 19.1003 55.511 19.2669 55.3782 19.4805C55.248 19.6914 55.1829 19.9323 55.1829 20.2031V24H54.261ZM60.5426 24.125C59.9801 24.125 59.4958 23.9922 59.0895 23.7266C58.6833 23.4609 58.3708 23.0951 58.152 22.6289C57.9333 22.1628 57.8239 21.6302 57.8239 21.0312C57.8239 20.4219 57.9359 19.8841 58.1598 19.418C58.3864 18.9492 58.7015 18.5833 59.1051 18.3203C59.5114 18.0547 59.9853 17.9219 60.527 17.9219C60.9489 17.9219 61.3291 18 61.6676 18.1562C62.0062 18.3125 62.2835 18.5312 62.4997 18.8125C62.7158 19.0937 62.8499 19.4219 62.902 19.7969H61.9801C61.9098 19.5234 61.7536 19.2812 61.5114 19.0703C61.2718 18.8568 60.9489 18.75 60.5426 18.75C60.1833 18.75 59.8682 18.8437 59.5973 19.0312C59.3291 19.2161 59.1195 19.4779 58.9684 19.8164C58.82 20.1523 58.7458 20.5469 58.7458 21C58.7458 21.4635 58.8187 21.8672 58.9645 22.2109C59.113 22.5547 59.3213 22.8216 59.5895 23.0117C59.8603 23.2018 60.1781 23.2969 60.5426 23.2969C60.7822 23.2969 60.9997 23.2552 61.195 23.1719C61.3903 23.0885 61.5557 22.9688 61.6911 22.8125C61.8265 22.6562 61.9228 22.4687 61.9801 22.25H62.902C62.8499 22.6042 62.721 22.9232 62.5153 23.207C62.3122 23.4883 62.0426 23.7122 61.7067 23.8789C61.3734 24.043 60.9853 24.125 60.5426 24.125ZM65.1055 20.3906V24H64.1837V16H65.1055V18.9375H65.1837C65.3243 18.6276 65.5352 18.3815 65.8165 18.1992C66.1003 18.0143 66.4779 17.9219 66.9493 17.9219C67.3582 17.9219 67.7162 18.0039 68.0235 18.168C68.3308 18.3294 68.5691 18.5781 68.7384 18.9141C68.9102 19.2474 68.9962 19.6719 68.9962 20.1875V24H68.0743V20.25C68.0743 19.7734 67.9506 19.4049 67.7032 19.1445C67.4584 18.8815 67.1186 18.75 66.6837 18.75C66.3816 18.75 66.1108 18.8138 65.8712 18.9414C65.6342 19.069 65.4467 19.2552 65.3087 19.5C65.1733 19.7448 65.1055 20.0417 65.1055 20.3906Z" fill="#9C9C9C"/>
</svg>

            
            

            <div className="campus-controls">
              <button className="filter">
                <i className="fa-solid fa-filter" style={{ color: "#054447", padding: "4px" }}></i> Filter <span className="notification">1</span>
              </button>
              <button className="export">
                <i class="fa-solid fa-arrow-up" style={{ color: "#054447", padding: "4px" }}></i> Export
              </button>

              <Link to ='/Newfield'>
                <button className="add-new-field">
                  + Add New Field
                </button></Link>
              
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