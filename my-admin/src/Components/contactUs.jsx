import { List, Datagrid, TextField } from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import './component.css'

// Display page with contact information for application issues and questions
const Empty = () => (
    <Box textAlign="center" m={1} className='empty'>
        <Box className="emptyContent" >
            <Typography  variant="h5" >
                    If you are struggling to apply or have any questions, please don't hesitate to contact us!    
            </Typography>
            <br/>
            <Typography variant="h6">
                For issues with applications and room assingments:
            </Typography>
            <Typography>
                Email: admin@stelstay.com <br/>
                Phone: (021) 887 3780 
            </Typography>
            <br/>
            <Typography variant="h6">
                For technical problems: 
            </Typography>
            <Typography>
                Email: support@macrosoft.com <br />
                Phone: (021) 551 3235
            </Typography>
        </Box>
    </Box>
);

// Defined a list component for the 'Contact' resource, kept empty to show the text above
export const ContactList = () => (
    <List title="Contact Us" empty={<Empty />} emptyWhileLoading>
         <Datagrid rowClick="show">
            <TextField source="Phone_Number" />
        </Datagrid>
    </List>
);