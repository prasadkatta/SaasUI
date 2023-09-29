import React from 'react'
import { Button } from '@chakra-ui/react'
import {
    Banner,
    BannerIcon,
    BannerContent,
    BannerTitle,
    BannerDescription,
    BannerActions,
    BannerCloseButton,
    LoadingOverlay,
    LoadingSpinner
} from '@saas-ui/react'
function Bannner() {
    return (
        <>
            <Banner>
                <BannerIcon />
                <BannerContent>
                    <BannerTitle>Update available.</BannerTitle>
                    <BannerDescription>
                        We've just released a new update, refresh to update.
                    </BannerDescription>
                </BannerContent>
                <BannerActions>
                    <Button colorScheme="white" variant="solid">
                        Refresh
                    </Button>
                </BannerActions>
                <BannerCloseButton />
            </Banner>
            <LoadingOverlay>
                <LoadingSpinner size="lg" color="primary.500" thickness="4px" />
            </LoadingOverlay>
        </>
    )
}

export default Bannner
