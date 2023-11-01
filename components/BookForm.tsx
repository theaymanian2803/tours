function BookForm() {
  return (
    <div className=" relative z-30">
      <div className="drawer drawer-end relative">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div
          className="drawer-content text-center 
        ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center capitalize">
              click the button book now to contact us
            </h1>
            <p className="py-6 text-center text-gray-700 font-semibold">
              once we receive an email from you we will contact you shortly with
              all the information needed
            </p>
          </div>
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary fixed top-5 left-5  z-30">
            Book Now
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <div className="menu w-full p-4 md:w-3/4 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="hero min-h-screen bg-base-200">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">
                    we will return to you with all the information needed please
                    fill all the fields given
                  </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookForm;
