import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box">
                <p className="copyright">
                  &copy; Copyright <strong>Hoàng Phương Đông</strong>. All Rights
                  Reserved
                </p>
                <div className="credits">Designed with me</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
