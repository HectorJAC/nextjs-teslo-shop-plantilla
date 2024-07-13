import { Box, Button } from '@mui/material';
import { ISize } from '../../interfaces';
import React, { FC } from 'react'

interface SizeSelectorProps {
    selectdSize?: ISize;
    sizes: ISize[];
}

export const SizeSelector:FC<SizeSelectorProps> = ({selectdSize, sizes}) => {
    return (
        <Box>
            {
                sizes.map((size) => (
                    <Button
                        key={size}
                        size='small'
                        color={selectdSize === size ? 'primary' : 'info'}
                    >
                        {size}
                    </Button>
                ))
            }
        </Box>
    );
};
