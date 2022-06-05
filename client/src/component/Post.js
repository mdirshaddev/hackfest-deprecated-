import React from 'react';

export default function Post() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-end gx-5">
          <div className="col-md-8">
            <div style={{ padding: '32px 64px', background: 'red' }}>
              <button className="btn btn-danger">Add a cover image</button>
              <div style={{ height: '100vh' }}>
                <span>
                  <textarea
                    style={{ textSize: '60px', fontWeight: 'bolder' }}
                    rows="4"
                    placeholder="New Post title here...."
                    
                  />
                </span>
              </div>
              <div>
                <input type="text" placeholder="Add up to 4 tags..."></input>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sticky" style={{ marginTop: '148px' }}>
              <div>
                <h4 className="mb-2 fs-1"> Writing a Great Post Title</h4>
                <ul>
                  <li>
                    Hello world this is the list where all the come from the
                    java script
                  </li>
                  <li>
                    Because all this is change when u click blog textarea, body
                    and many more
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
