import { css } from '@emotion/react'
/**
 * setupContainer.style
 * @returns {CSSObject}
 */

const getSetupContainerStyleIB = () => {
  const setupContainer = css({
    border: '1px solid black',
    backgroundColor: '#ffffff'
    // remove this and add relevant css
  })
  const sucessMsgStyles = css({
    marginBottom: '1.5rem'
  })
  const setupAutopayHeader = css({
    alignItems: 'center',
    '& h1': {
      fontSize: '25px'
      // paddingLeft: '0.5rem'
    }
  })
  const modalHeadeOLB = css({
    padding: '1rem 1.25rem',
    '& h1': {
      fontSize: '1.5rem',
      fontWeight: '400',
      marginTop: '2rem'
    },
    '& .usb-modal--container .modal-header': {
      padding: '1rem 2.5rem 1rem'
    }
  })
  const removeAutopayStyle = css({
    margin: 0,
    border: 'none',
    marginTop: '10px',
    padding: '1rem',
    borderTop: '1px solid #e8e8e8',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e8e8e8',
    cursor: 'pointer',
    textAlign: 'left',
    fontSize: '1rem',
    color: 'rgb(230, 23, 44)'
  })
  const hideRightChevron = css({
    '& svg': {
      display: 'none'
    },
    '& p': {
      color: 'black',
      fontWeight: '400'
    }
  })
  const headerStyle = css({
    display: 'flex',
    alignItems: 'center',
    h2: {
      color: 'rgb(85, 85, 85)',
      fontSize: '1rem',
      fontWeight: 'normal'
    }
  })
  const nickNameStyle = css({
    padding: '0 0 0.5rem 4rem',
    color: 'rgb(85, 85, 85)',
    fontSize: '0.813rem',
    fontWeight: 'normal',
    // marginTop: isOLBOrIpadApp() ? '-1rem' : '0'
  })
  const headerIconStyle = css({
    flex: 'none'
  })
  const navbar = css({
    backgroundColor: '#343a40',
    padding: '0.5rem 1rem'
  })
  const navbarAlign = css({
    display: 'flex',
    justifyContent: 'center'
  })
  const navbarCognizant = css({
    color: "#fff",
    marginLeft: '3rem',
    textDecoration: "none"
  })
  const setupHeaderStyle = css({
    // marginBottom: '1.5rem',
    background: '#ffffff',
    // display: 'flex',
    width: '100%',
    alignItems: 'center'
  })
  const frequencyOptionsHeaderStyle = css({
    background: '#ffffff',
    padding: '0.8rem',
    // borderBottom: '1px solid #e8e8e8',
    '& h1': {
      fontSize: '1.6rem',
      fontWeight: '700'
    }
  })
  const amountToPayHeaderBg = css({
    background: '#ffffff'
  })
  const amountToPayHeader = css({
    margin: '10px 20px 20px'
  })
  const amountToPayContainer = css({
    borderTop: '1px solid #e8e8e8',
    background: '#ffffff',
    '& a': {
      gap: 0
    }
  })
  const setupAutopayTitle = css({
    color: '#636466',
    fontSize: '14px',
    marginBottom: '0.5rem'
  })
  const autopayPastAmountHeader = css({
    marginTop: '20px',
    color: '#636466',
    fontSize: '14px',
    borderTop: '1px solid #f7f7fa'
  })
  const setupAutopayButton = css({
    margin: '6px 10px 0px 0px',
    padding: '9px 32px'
  })
  const makePaymentsContainer = css({
    borderTop: '1px solid #e8e8e8',
    borderBottom: '1px solid #e8e8e8',
    backgroundColor: '#ffffff',
    marginBottom: '0px',
    alignContent: 'start',
    '& a': {
      gap: 0
    }
  })
  const payFromDropdown = css({
    '& > button[type=button][aria-expanded=false]': {
      // width: '100%',
      borderBottom: '1px solid #858585',
      borderRadius: '0px'
    },
    '& .dropdown__btn span.dropdown__btn-selection.selected': {
      marginLeft: 0
    }
  })
  const payFromContainer = css({
    backgroundColor: '#ffffff',
    '& a': {
      gap: 0,
      margin: 0
    },
    '& .usb-dropdown .dropdown__list': {
      minWidth: '0',
      width: '480px'
    }
  })
  const buttonStyle = css({
    backgroundColor: '#e8e8e8',
    '& footer': {
      position: 'fixed',
      width: '100%'
    }
  })
  const disclaimerContent = css({
    padding: '1rem',
    wordBreak: 'break-word',
    color: '#6E6E6E',
    fontSize: '12px',
    lineHeight: '18px'
  })
  const disclaimerContentFooterOLB = css({
    float: 'right'
  })
  const disclaimerContentOLB = css({
    padding: '1rem',
    wordBreak: 'break-word',
    color: '#6E6E6E'
  })
  const disclaimerHeaderStyle = css({
    padding: '1rem',
    borderBottom: '0.1px solid gray'
  })
  const termsParagraph = css({
    marginTop: '1rem',
    marginLeft: '1rem',
    // marginBottom: tokenSpacing20,
    paddingRight: '1.25rem'
  })
  const termsOfServiceLink = css({
    margin: 0,
    padding: 0,
    background: 'transparent',
    border: 'none',
    textDecoration: 'none',
    color: '#0A41C5'
  })
  const footer = css({

    display: "flex",

    justifyContent: "space-between",

  });

  const footerstyle = css({

    marginTop: "16px",

  });
  const sucessMsgStylesOLB = css({
    marginTop: '1rem'
  })
  const desktopStyles = {
    payFromDropdown,
    sucessMsgStylesOLB,
    setupContainer,
    setupAutopayHeader,
    hideRightChevron,
    amountToPayHeader,
    setupAutopayTitle,
    autopayPastAmountHeader,
    setupAutopayButton,
    makePaymentsContainer,
    payFromContainer,
    buttonStyle,
    termsParagraph,
    termsOfServiceLink,
    frequencyOptionsHeaderStyle,
    amountToPayHeaderBg,
    amountToPayContainer,
    setupHeaderStyle,
    removeAutopayStyle,
    modalHeadeOLB,
    sucessMsgStyles,
    disclaimerContent,
    disclaimerHeaderStyle,
    disclaimerContentOLB,
    disclaimerContentFooterOLB
  }
  const mobileStyles = {
    headerStyle,
    nickNameStyle,
    headerIconStyle,
    disclaimerContentOLB,
    setupContainer,
    setupAutopayHeader,
    hideRightChevron,
    amountToPayHeader,
    setupAutopayTitle,
    autopayPastAmountHeader,
    setupAutopayButton,
    makePaymentsContainer,
    payFromContainer,
    buttonStyle,
    termsParagraph,
    termsOfServiceLink,
    frequencyOptionsHeaderStyle,
    amountToPayHeaderBg,
    amountToPayContainer,
    setupHeaderStyle,
    removeAutopayStyle,
    sucessMsgStyles,
    disclaimerContent,
    disclaimerHeaderStyle,
    navbar,
    navbarCognizant,
    navbarAlign,
    footerstyle,
    footer
  }
  return [mobileStyles, desktopStyles]
}
export default getSetupContainerStyleIB