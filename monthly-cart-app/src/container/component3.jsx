import React from "react";
import getSetupContainerStyleIB from "./component1.style";
import { css as cxCss, cx } from "@emotion/css";
const component3 = () => {
  const [mobileStyles] = getSetupContainerStyleIB() || {};
  return (
    <footer>
      <div className={cx(`${cxCss({ ...mobileStyles.footer })}`)}>
        <div>
          <p>Copyright &copy; 2021 Cognizant</p>
        </div>
        <div className={cx(`${cxCss({ ...mobileStyles.footerstyle })}`)}>
          <a href="#">Terms of use</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default component3;