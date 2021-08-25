import React from 'react'; 
// import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <div {...props}>
        {children}
    </div>
); 

export default CustomButton;