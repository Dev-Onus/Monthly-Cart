import { css as cxCss, cx } from '@emotion/css'
import React from 'react'
import getSetupContainerStyleIB from './component1.style'

const Component1 = () => {
    const [mobileStyles, desktopStyles] = getSetupContainerStyleIB() || {}
    return (
        <>
            <div className={cx(

                `${cxCss({ ...mobileStyles.payFromContainer })}`

            )}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor neque nulla delectus recusandae possimus voluptates explicabo molestiae labore magnam, sapiente, asperiores, dignissimos pariatur totam quod dolores reprehenderit autem corrupti?
            </div>
            <div className={cx(

                `${cxCss({ ...desktopStyles.autopayPastAmountHeader })}`

            )}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor neque nulla delectus recusandae possimus voluptates explicabo molestiae labore magnam, sapiente, asperiores, dignissimos pariatur totam quod dolores reprehenderit autem corrupti?
            </div>

            <nav className={cx(

`${cxCss({ ...mobileStyles.navbar })}`

)}>
                <div class="container">
                    <a href="#" class="navbar-brand mr-3">Nair</a>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-targe="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="#" class="nav-item nav-link active">Home</a>
                            <a href="#" class="nav-item nav-link">Services</a>
                            <a href="#" class="nav-item nav-link ">About</a>
                            <a href="#" class="nav-item nav-link ">Contact</a>
                        </div>
                        <div class="navbar-nav ml-auto">
                            <a href="#" class="nav-item nav-link ">Register</a>
                            <a href="#" class="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Component1