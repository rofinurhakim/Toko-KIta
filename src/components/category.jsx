
const Category = () => {
  return (
    <>
      <div className="card mt-5">
        <div className="row p-3">
          <div className="col-md-6">
            <h3 className="fw-bold">Kategori Pilihan</h3>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <h3 className="fw-bold">Top Up & Tagihan</h3>
              <p className="m-2 text-kita-green  fw-bold">Lihat Semua</p>
            </div>
            <div className="card mt-2">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pulsa-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pulsa"
                    type="button"
                    role="tab"
                    aria-controls="pulsa"
                    aria-selected="true"
                  >
                    Pulsa
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="paket-data-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#paket-data"
                    type="button"
                    role="tab"
                    aria-controls="paket-data"
                    aria-selected="false"
                  >
                    Paket Data
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="flight-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#flight"
                    type="button"
                    role="tab"
                    aria-controls="flight"
                    aria-selected="false"
                  >
                    Flight
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="listrik-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#listrik"
                    type="button"
                    role="tab"
                    aria-controls="listrik"
                    aria-selected="false"
                  >
                    Listrik PLN
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="pulsa"
                  role="tabpanel"
                  aria-labelledby="pulsa-tab"
                >
                  <div className="row p-3">
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nomor Telepon</h5>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nomor"
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nominal</h5>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Pilih Nominal</option>
                        <option value="1">Rp. 10.000</option>
                        <option value="2">Rp. 25.000</option>
                        <option value="3">Rp. 50.000</option>
                        <option value="4">Rp. 100.000</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-primary">Beli</button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="paket-data"
                  role="tabpanel"
                  aria-labelledby="paket-data-tab"
                >
                  <div className="row p-3">
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nomor Telepon</h5>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nomor"
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nominal</h5>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Pilih Nominal</option>
                        <option value="1">Rp. 10.000</option>
                        <option value="2">Rp. 25.000</option>
                        <option value="3">Rp. 50.000</option>
                        <option value="4">Rp. 100.000</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-primary">Beli</button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="flight"
                  role="tabpanel"
                  aria-labelledby="flight-tab"
                >
                  <div className="row p-3">
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nomor Telepon</h5>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nomor"
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nominal</h5>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Pilih Nominal</option>
                        <option value="1">Rp. 10.000</option>
                        <option value="2">Rp. 25.000</option>
                        <option value="3">Rp. 50.000</option>
                        <option value="4">Rp. 100.000</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-primary">Beli</button>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="listrik"
                  role="tabpanel"
                  aria-labelledby="listrik-tab"
                >
                  <div className="row p-3">
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nomor Telepon</h5>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Masukkan Nomor"
                      />
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold">Nominal</h5>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Pilih Nominal</option>
                        <option value="1">Rp. 10.000</option>
                        <option value="2">Rp. 25.000</option>
                        <option value="3">Rp. 50.000</option>
                        <option value="4">Rp. 100.000</option>
                      </select>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button className="btn btn-primary">Beli</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;

