import { css as cxCss, cx } from '@emotion/css'
import React from 'react'
import getSetupContainerStyleIB from './component1.style'

const Component1 = () => {
    const [mobileStyles, desktopStyles] = getSetupContainerStyleIB() || {}
    return (
        <>
            <nav className={cx(

                `${cxCss({ ...mobileStyles.navbar })}`

            )}>
                <div className={cx(

                    `${cxCss({ ...mobileStyles.navbarAlign })}`)}>
                    <a href="#" className={cx(

                        `${cxCss({ ...mobileStyles.navbarCognizant })}`)}>Cognizant</a>
                    <div className={cx(

                        `${cxCss({ ...mobileStyles.navbarAlign })}`)}>
                        <div class="navbar-nav">
                            <a href="#" className={cx(

                                `${cxCss({ ...mobileStyles.navbarCognizant })}`)}>Home</a>
                            <a href="#" className={cx(

                                `${cxCss({ ...mobileStyles.navbarCognizant })}`)}>Services</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <div className={cx(

                    `${cxCss({ ...mobileStyles.payFromContainer })}`

                )}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor neque nulla delectus recusandae possimus voluptates explicabo molestiae labore magnam, sapiente, asperiores, dignissimos pariatur totam quod dolores reprehenderit autem corrupti?
                </div>
                <div className={cx(

                    `${cxCss({ ...desktopStyles.autopayPastAmountHeader })}`

                )}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor neque nulla delectus recusandae possimus voluptates explicabo molestiae labore magnam, sapiente, asperiores, dignissimos pariatur totam quod dolores reprehenderit autem corrupti?
                </div>
            </div>
        </>
    )
}

export default Component1