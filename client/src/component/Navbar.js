import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-xl">
        <div className="row m-1 d-flex ">
          <div className="col-auto">
            <Link to="/">HackF</Link>
          </div>
          <div className="col-md-5">
            <input
              type="search"
              id="gsearch"
              name="gsearch"
              style={{ width: '100%' }}
              className="form-control p-1"
              placeholder="Search...."
            />
          </div>
          <div
            className="col-md-5 align-self-end ms-auto"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end'
            }}>
            <button
              type="button"
              className="btn btn-outline-primary"
              style={{ marginLeft: '1em' }}
              onClick={() => {
                console.log('Create Post Clicked');
                navigate('/new');
              }}>
              Create Post
            </button>
            <i
              className="fa-solid fa-bell"
              style={{ fontSize: '1.5em', marginLeft: '1em' }}></i>
            <i
              className="fa-solid fa-user"
              style={{ fontSize: '1.5em', marginLeft: '1em' }}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
