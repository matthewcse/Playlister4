import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export default function MUIDeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.unmarkListForDeletion();
    }

    return (
        <Modal
            open={store.listMarkedForDeletion !== null}
        >
            <Box sx={style}>
            <div
        id="delete-list-modal"
        className="modal is-visible"
        data-animation="slideInOutLeft">
        <div className="modal-root" id='verify-delete-list-root'>
            <div className="modal-north">
            Delete the {name} playlist?
            </div>
            <div className="modal-center">
                <div className="modal-center-content">
                    Are you sure you wish to permanently delete the {name} playlist?
                </div>
            </div>
            <div className="modal-south">
                <input 
                    type="button" 
                    id="remove-song-confirm-button" 
                    className="modal-button" 
                    onClick={handleDeleteList} 
                    value='Confirm' />
                <input 
                    type="button" 
                    id="remove-song-cancel-button" 
                    className="modal-button" 
                    onClick={handleCloseModal} 
                    value='Cancel' />
            </div>
        </div>
            </div>
            </Box>
        </Modal>
    );
}