function BookForm() {
  return (
    <>
      <div className=" relative z-30 ">
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
                once we receive an email from you we will contact you shortly
                with all the information needed
              </p>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <div className="menu w-[350px] p-4 md:w-3/4 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <div className="hero min-h-screen flex flex-col justify-center bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">send us a message</h1>
                    <p className="py-6">
                      we will return to you with all the information needed
                      please fill all the fields given
                    </p>
                  </div>
                  <div className=" w-[300px] md:max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      fill in form
                    </h2>

                    <form>
                      <div className="mb-4">
                        <label
                          className="block text-sm font-medium text-gray-300"
                          htmlFor="name">
                          Full Name
                        </label>
                        <input
                          className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                          type="text"
                          placeholder="enter a name"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-sm font-medium text-gray-300"
                          htmlFor="email">
                          Email Address
                        </label>
                        <input
                          className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                          name="email"
                          id="email"
                          type="email"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-sm font-medium text-gray-300"
                          htmlFor="bio">
                          information
                        </label>
                        <textarea
                          className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                          name="bio"
                          id="bio"></textarea>
                      </div>

                      <div className="flex justify-end">
                        <button
                          className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                          type="submit">
                          submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookForm;
