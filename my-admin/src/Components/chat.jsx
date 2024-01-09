import { Datagrid, DateField, List, ReferenceField, SimpleForm, SimpleShowLayout, TextField, TextInput, ReferenceInput, CreateButton } from 'react-admin';
import {Show, Create, Edit} from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import { pbProvider } from '../App';
import ChatIcon from '@mui/icons-material/Chat';
import './component.css'

// Display message for no chat messages
const Empty = () => (
    <Box textAlign="center" m={1} className='emptyPark'>
        <Box className="emptyContent" >
        <ChatIcon fontSize={"large"}/>
            <Typography  variant="h5" >
                    Start chatting with your fellow residents today!     
            </Typography>
            <CreateButton label="Start Chat" resource='Chat' sx={{fontSize:'20px', color: '#FD7EA7'}}/>
        </Box>
    </Box>
);

// Defined a list component for the 'Chat' resource
export const ChatList = () => (
    <List empty={<Empty />} sort={{ field: 'created', order: 'DESC' }}>
        <Datagrid rowClick="Show">
            <ReferenceField source="From" reference="Users" />  
            <TextField source="Message" />
            <DateField source="created"/>
        </Datagrid>
    </List>
);

// Defined a show component for the 'Chat' resource
export const ChatShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="From" reference="Users" />
            <TextField source="Message" />
            <DateField source="created"/>
        </SimpleShowLayout>
    </Show>
);

// Defined an edit component for the 'Chat' resource
export const ChatEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Message" />
        </SimpleForm>
    </Edit>
);

// Defined a create component for the 'Chat' resource
export const ChatCreate = () => {
    {/* set default for user that the message is coming from */}
    const record = pbProvider.pb.authStore.model;
    const postDefaultValue = () => ({ 'From': `${record.id}` });
    return(
    <Create disableAuthentication >
        <SimpleForm defaultValues={postDefaultValue}>
            <ReferenceInput label="To" source="To" reference="Users" />
            <TextInput source="Message" />
        </SimpleForm>
    </Create>)
};