import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-3"></footer>
      <footer className="py-3"></footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center">
                &copy;{new Date().getFullYear()}:Power by Developer's Corner{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
