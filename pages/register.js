export default function Register() {
  const submitDel = async (event) => {
    const res = await fetch("/api/users/users", {
      body: JSON.stringify({
        id: '1',
        act: "delUsers",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };
  const submitRegister = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const phone = event.target.phone.value;
    const password = event.target.password.value;

    const res = await fetch("/api/users/users", {
      body: JSON.stringify({
        email: email,
        fname: fname,
        lname: lname,
        phone: phone,
        password: password,
        act: "insertUsers",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(JSON.stringify(result));
    alert(JSON.stringify(result));
  };
  return (
    <div className="container">
      <div className="row justify-content-md-center mt-5">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header">
              <h1>Register</h1>
            </div>
            <div className="card-body">
              <form onSubmit={submitRegister}>
                <div className="row justify-content-md-center mt-1">
                  <div className="col-md-12">
                    <label htmlFor="email">
                      <b>E-mail</b>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-md-center mt-1">
                  <div className="col-md-6">
                    <label htmlFor="fname">
                      <b>Firstname</b>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lname">
                      <b>Lastname</b>
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id="lname"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-md-center mt-1">
                  <div className="col-md-12">
                    <label htmlFor="phone">
                      <b>phone</b>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row justify-content-md-center mt-1">
                  <div className="col-md-12">
                    <label htmlFor="password">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="row  justify-content-md-center">
                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="mt-2 btn btn-success float-end"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <form onSubmit={submitDel}>
                <button className="btn btn-danger ">DELETE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
