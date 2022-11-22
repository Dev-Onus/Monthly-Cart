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
        </>
    )
}

export default Component1