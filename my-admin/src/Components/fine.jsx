import { Datagrid, Edit, DateField, List, ReferenceField, ReferenceInput, TextField, Show, SimpleShowLayout, CreateButton, SelectInput, TextInput, Create, SimpleForm, RichTextField, DateInput } from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import './component.css';

//Page with display message when user has no fines on their profile
const Empty = () => (
    <Box textAlign="center" m={1} className='emptyPark'>
        <Box className="emptyContent" >
            <Typography  variant="h4" >
                No fines have been issued to you. Good job!
            </Typography>   
        </Box>
    </Box>
);

// Defined a list component for the 'Fine' resource
export const FineList = () => (
    <List empty={<Empty />} emptyWhileLoading>
        <Datagrid rowClick="show">
            <ReferenceField label="Issued to:" source="Issued_To" reference="Users"/>
            <TextField source="Details" />
            <TextField source="Amount"/>
            <DateField source="Due" />
        </Datagrid>
    </List>
);

// Defined a show component for the 'Fine' resource
export const FineShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField label="Issued to:" source="Issued_To" reference="Users"/>
            <TextField source="Details" />
            <TextField source="Amount"/>
            <DateField source="Due" />
        </SimpleShowLayout>
    </Show>
);

// Defined an edit component for the 'Fine' resource
export const FineEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput label="Issued to:" source="Issued_To" reference="Users"/>
            <TextInput source="Details" />
            <TextInput source="Amount"/>
            <DateInput source="Due" />
        </SimpleForm>
    </Edit>
);

// Defined a create component for the 'Fine' resource
export const FineCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput label="Issued to:" source="Issued_To" reference="Users"/>
            <TextInput source="Details" />
            <TextInput source="Amount"/>
            <DateInput source="Due" />
        </SimpleForm>
    </Create>
);
