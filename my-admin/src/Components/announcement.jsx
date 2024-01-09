import { Datagrid, DateField, List, ReferenceField, RichTextField, TextField, Show, SimpleShowLayout, Edit, Create, SimpleForm, SelectInput, TextInput, ReferenceInput } from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import './component.css';
import { pbProvider } from '../App';

// Set page to display when list is empty
const Empty = () => (
    <Box textAlign="center" m={1} className='emptyPark'>
        <Box className="emptyContent" >
        <ChatIcon fontSize={"large"}/>
            <Typography  variant="h5" >
                    Communications are only visible to StelStay residents. Please check back later!     
            </Typography>
        </Box>
        </Box>
);

// Created list for announcements that includes autogenerated fields
export const AnnouncementList = () => (
        <List title="Announcements" empty={<Empty />} emptyWhileLoading>
            <Datagrid rowClick="show">
                <ReferenceField source="Admin" label="Admin" reference ="Users" />
                <TextField source="Announcement"/>
                <TextField source="Type" />
                <DateField source="created" />
                <DateField source="updated" />
            </Datagrid>
        </List>
);

export const AnnouncementShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="Admin" label="Admin" reference ="Users" />
            <TextField source="Announcement"/>
            <TextField source="Type" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

// created announcement edit with select input
export const AnnouncementEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="Admin" reference="Users" />
            <TextInput source="Announcement"/>
            <SelectInput source="Type" choices={[
                {id: 'General', name: 'General' },
                {id: 'Event', name: 'Event' },
                {id: 'Maintenance', name: 'Maintenance' },
                {id: 'Urgent', name: 'Urgent' },
            ]} />
        </SimpleForm>
    </Edit>
);

// created form to create announcement with a default value for admin field 
export const AnnouncementCreate = () => {
    const record = pbProvider.pb.authStore.model; // fetches currently logged in users information
    const postDefaultValue = () => ({ 'Admin': `${record.id}` }); // sets current logged in user to the field as a default
    return(
        <Create>
            <SimpleForm defaultValue={postDefaultValue}>
                <ReferenceInput label="Admin" source="Admin" reference="Users" filter={record.role ='Admin'}disabled/>
                <TextInput source="Announcement"/>
                <SelectInput source="Type" choices={[
                    {id: 'General' , name: 'General' },
                    {id: 'Event', name: 'Event' },
                    {id: 'Maintenance', name: 'Maintenance' },
                    {id: 'Urgent', name: 'Urgent' },
                ]} />
            </SimpleForm>
        </Create>)
};