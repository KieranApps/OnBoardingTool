import { useState } from 'react';
import { Box, Modal, TextField } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export function ShowCreateProjectModal (props) {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [toastText, setToastText] = useState(null);
    
    function onChangeName(e) {
        setName(e.target.value);
    }

    function onChangeDescription(e) {
        setDescription(e.target.value);
    }

    return (<Modal open={props.open} onClose={props.handleClose} aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
            <Box>
                <TextField onChange={onChangeName} variant="filled" label="Name"/>
            </Box>
          <Box>
            <TextField onChange={onChangeDescription} variant="filled" label="Decription" multiline rows={5}/>
          </Box>
        </Box>
    </Modal>);
}