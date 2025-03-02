const GetCallback = () => {
  return (
    <div id="cantFindForm" className="cant-find-package-container flex flex-col items-center">
      <div className="form-container">
        <h2 className="form-title">Not sure which package to pick?</h2>
        <p className="form-subtitle">Talk to our trip experts now to get the best deal</p>

        <div className="form-fields">
          <div className="input-group">
            <input
              type="text"
              id="namePackageBottom"
              className="input-field"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              id="emailPackageBottom"
              className="input-field"
              name="email"
              placeholder="Enter Your Email"
              autoComplete="email"
              required
              title="Verified by Zero Phishing"
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              id="phonePackageBottom"
              className="input-field"
              name="tel"
              placeholder="Enter Your Mobile Number"
              autoComplete="tel"
              required
            />
          </div>

          <div className="input-group">
            <button className="submit-btn" id="destRightSubmit">
              Get Callback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCallback;
