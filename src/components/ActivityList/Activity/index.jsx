import React from "react";

const Activity = ({ item, col }) => {
  return (
    <div className={`col-${col} mt-3`}>
      <div className="card">
        <img src={item.coverSrc} className="card-img-top" width="100%" />
        <div className="card-body pt-0 px-0">
          <div className="d-flex flex-row justify-content-between mb-0 px-3">
            <small className="text-muted mt-1">Başlangıç Tarihi</small>
            <h6>{item.startDate}</h6>
          </div>
          <div className="d-flex flex-row justify-content-between mb-0 px-3">
            <small className="text-muted mt-1">Bitiş Tarihi</small>
            <h6>{item.endDate}</h6>
          </div>
          <hr className="mt-2 mx-3" />
          <div className="d-flex flex-row justify-content-between px-3 pb-4">
            <div className="d-flex flex-column">
              <span className="text-muted">Kategori</span>
            </div>
            <div className="d-flex flex-column">
              <h5 className="mb-0">{item.category}</h5>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between p-3 mid">
            <div className="d-flex flex-column">
              <small className="text-muted mb-1">Mekan</small>
              <div className="d-flex flex-row">
                <small className="text-muted mb-2">
                  <b>{item.place}</b>
                </small>
              </div>
            </div>
          </div>
          <div className="mx-3 mt-3 mb-2">
            <button type="button" className="btn btn-danger btn-block">
              <small>Detaya Git</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
