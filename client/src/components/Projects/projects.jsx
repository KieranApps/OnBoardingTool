import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../Pagewrapper/pagewrapper.jsx';
import { Box, Button, Grid,} from '@mui/material';

import { ROLES } from '../../helpers/constants.js';

import { ShowCreateProjectModal } from '../Modals/CreateProjectModal.jsx';

const Projects = (props) => {
    const nav = useNavigate();

    const [createProjectModal, setShowCreateProjectModal] = useState(false);

    useEffect(() => {
      // Redirect if not logged in
      if (props.loadedConfig && !props.loggedin) {
        nav('/login');
      }
    })

    function showCreateProjectModal() {
      setShowCreateProjectModal(true);
    }

    function hideCreateProjectModal() {
      setShowCreateProjectModal(false);
    }

    function showCreateButton() {
      // Need user info (for perms)
      if (ROLES.HR === props.props.user?.role_id) {
        return (
          <Box p={2} m={2} display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Button variant='contained' onClick={showCreateProjectModal}>Create Project</Button>
          </Box>
      );
      }
      return;
    }

    return (
      <>
        <PageWrapper/>
        {showCreateButton()}
        {createProjectModal && <>
          <ShowCreateProjectModal open={createProjectModal} handleClose={hideCreateProjectModal}></ShowCreateProjectModal>
        </>}
      </>
    );

    return <></>;
}

export default Projects;