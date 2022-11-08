import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RegisterScreen from './RegisterScreen';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorModal() {
    const {reg} = React.useContext(RegisterScreen);
    let open = false;
    function handleClose () {
        open = false;
    }

    let modalClass = "modal";
    if (reg.error !== null) {
        modalClass += " is-visible";
        open = true;
    }
    
    return (
        <Modal
            open={open}
        >
            <Box sx={style}>
            <div
        id="error-modal"
        data-animation="slideInOutLeft">
        <div className="modal-root" id='error-root'>
            <div className="modal-north">
                Error!!!!
            </div>
            <div className="modal-center">
                <div className="modal-center-content">
                    {reg.error}
                </div>
            </div>
            <div className="modal-south">
            <Button 
                    variant = "outlined"
                    id="error-button" 
                    className="modal-button"  
                    onClick={handleClose}
                    >OK</Button>
            </div>
        </div>
    </div>
            </Box>
        </Modal>
    );
}