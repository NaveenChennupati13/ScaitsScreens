import NavSidebar from "./side-top-nav-bars";
import { Link } from "react-router-dom";


function View() {
  return (
    <>
      <NavSidebar />
      <div className="view-container">

        <div className="popup">
          <div className="headerss">
            <h2>View</h2>
            <Link to='/Campus'><button className="close-btn">&times;</button></Link>
          </div>
          <div className="form-row">
            <div className="form-group small">
              <label>Campus ID</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="form-group small">
              <label>Campus Code</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="form-group big">
              <label>Campus Name</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group small">
              <label>Campus Type</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="form-group small">
              <label>Code</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="form-group big">
              <label>Status</label>
              <input type="text" placeholder="Enter Value" />
            </div>
          </div>
          <div className="form-row">
            <div className='form-group very-big'>
              <label>Address Dno</label>
              <input type='text' placeholder='Enter Value'></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group big">
              <label>Land Mark</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="form-group small">
              <label>Location</label>
              <input type="text" placeholder='Enter Value' />
            </div>
            <div className="form-group small">
              <label>Pin</label>
              <input type="text" placeholder='Enter Value' />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group big">
              <label>Name</label>
              <input type="text" placeholder="Enter Value" />
            </div>
            <div className="form-group small">
              <label>Street ID</label>
              <input type="text" placeholder='Enter Value' />
            </div>
            <div className="form-group small">
              <label>City ID</label>
              <input type="text" placeholder='Enter Value' />
            </div>
          </div>
          <div className='form-row'>
            <div className='form-group big'>
              <label>Country ID</label>
              <input type='text' placeholder='Enter Value'></input>
            </div>
          </div>
          <div class="button-group">
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
          </div>
        </div>


      </div>
    </>
  );
}
export default View;