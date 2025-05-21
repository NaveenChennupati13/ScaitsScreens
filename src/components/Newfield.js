import NavSidebar from "./side-top-nav-bars";
import { Link } from "react-router-dom";
import '../styling/Newfield.css';

function Newfield() {
  return (
    <>
      <NavSidebar />
      <div className="Newfield-view-container">
        <div className="Newfield-popup">
          <div className="Newfield-headerss">
            <h2>Newfield</h2>
            <Link to='/Campus'><button className="Newfield-close-btn">×</button></Link>
          </div>
          <div className="Newfield-form-row">
            <div className="Newfield-form-group Newfield-small">
              <label>Campus ID</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-small">
              <label>Campus Code</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-big">
              <label>Campus Name</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="Newfield-form-row">
            <div className="Newfield-form-group Newfield-small">
              <label>Campus Type</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-small">
              <label>Code</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-big">
              <label>Status</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="Newfield-form-row">
            <div className="Newfield-form-group Newfield-very-big">
              <label>Address Dno</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="Newfield-form-row">
            <div className="Newfield-form-group Newfield-big">
              <label>Land Mark</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-small">
              <label>Location</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-small">
              <label>Pin</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="Newfield-form-row">
            <div className="Newfield-form-group Newfield-big">
              <label>Name</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-small">
              <label>Street ID</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="Newfield-form-group Newfield-small">
              <label>City ID</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="Newfield-form-row">
            <div className="Newfield-form-group Newfield-big">
              <label>Country ID</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="Newfield-button-group">
            <button className="Newfield-delete-btn">Delete</button>
            <button className="Newfield-edit-btn">Edit</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Newfield;