import { useState, useEffect } from 'react';
import { Box, Button, Modal, TextField, Snackbar, Alert } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

import { getAllManagers } from '../../helpers/helper.js';
import { createNewProject } from '../Projects/projectsFunctions.js';

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
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [toastText, setToastText] = useState(null);
    const [configErrorToastOpen, setConfigErrorToastOpen] = useState(false);
    const [managers, setManagers] = useState(null)

    useEffect(async () => {
        const managers = await getAllManagers();

    });
    
    function handleErrorToastClose() {
      setConfigErrorToastOpen(false);
    }
    function handleErrorToastOpen(text) {
      setConfigErrorToastOpen(true);
      setToastText(text)
    }

    function onChangeName(e) {
        setName(e.target.value);
    }

    function onChangeDescription(e) {
        setDescription(e.target.value);
    }

    function onChangeStartDate(e) {
        setStartDate(e.$d);
    }

    function onChangeEndDate(e) {
        setEndDate(e.$d);
    }
    
    // MOVE THIS to the projects.js level
    function showToastMessage() {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={configErrorToastOpen}
                autoHideDuration={5000}
                onClose={handleErrorToastClose}
                key={'top' + 'right'}
            >
                <Alert
                    onClose={handleErrorToastClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {toastText}
                </Alert>
            </Snackbar>
        );
    }

    function disableSubmit(){
        if (name === null || description === null || startDate === null || endDate === null) {
            return true;
        }
        if (name.trim().length <= 0 || description.trim().length <= 0) {
            return true;
        }
        if (dayjs(startDate).$d == 'Invalid Date' || dayjs(endDate).$d == 'Invalid Date') {
            return true;
        }
        if (dayjs(endDate).isBefore(Date.now())) {
            console.log(' Cant have end date in past')
            // Sort out error messages under input boxes, or show a toast? Maybe too much
            return true;
        }

        return false;
    }
    async function submitNewProject() {
        const body = {
            name: name.trim(),
            description: description.trim(),
            startDate,
            endDate
        };
        const result = await createNewProject(body);
        if (!result) {
            handleErrorToastOpen('Something went wrong creating your project, please try again...')
        }
    }

    return (<Modal open={props.open} onClose={props.handleClose} aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
        <Box sx={modalStyle}>
        {/* // MOVE THIS to the projects.js level */}
            {showToastMessage()}
            <Box>
                <TextField onChange={onChangeName} variant="filled" label="Name"/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        label="Start Date"
                        onChange={onChangeStartDate}
                    />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateField
                        label="End Date"
                        onChange={onChangeEndDate}
                    />
                </LocalizationProvider>
                <TextField>Mangers</TextField>
          </Box>
          <Box>
            <TextField onChange={onChangeDescription} variant="filled" label="Decription" multiline rows={5}/>
            <Button disabled={disableSubmit()} variant='contained' onClick={submitNewProject}>Submit</Button>
          </Box>
        </Box>
    </Modal>);
}