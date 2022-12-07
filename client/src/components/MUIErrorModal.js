import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import AuthContext from '../auth'
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 200,
    width: 400,
    border: '5px solid yellow',
    fontSize: "20px",
    p: 4
};

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);
    function handleClose () {
        auth.closeError();
    }
    
    return (
        <Modal open = {auth.isErrorModalOpen()}>
         <Alert sx={style} severity="warning">{auth.error}
         <Button sx={{color:"black", mt:"20px", ml:"85px", fontSize: 13, fontWeight: 'bold', border: 2}}
            variant="outlined"
            onClick={handleClose}>Close</Button>
         </Alert>
        </Modal>
        /*
        <Modal
            open={auth.isErrorModalOpen()}
        >
            <Box sx={style}>
            <div
        id="error-modal"
        className="modal is-visible"
        data-animation="slideInOutLeft">
        <div className="modal-root" id='error-root'>
            <div className="modal-north">
                Error!!!!
            </div>
            <div className="modal-center">
                <div className="modal-center-content">
                    {auth.error}
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
        </Modal>*/
    );
}