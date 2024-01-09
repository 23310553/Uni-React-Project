import {Datagrid,ReferenceInput, Create, DateField, List, NumberField, SelectInput, Show, SimpleShowLayout, TextField, ReferenceField, Edit, NumberInput, SimpleForm, Pagination } from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import './component.css'

// Page with a message to display when the student has not been assigned to a parking bay
const Empty = () => (
    <Box textAlign="center" m={1} className='emptyPark'>
        <Box className="emptyContent" >
        <DirectionsCarIcon fontSize={"large"}/>
            <Typography  variant="h5" >
                    You have not been assigned a parking spot.     
            </Typography>
        </Box>
    </Box>
);

// ensures that all parkings show at once
const PostPagination = props => <Pagination rowsPerPageOptions={[40, 80, ]} {...props} />;

// Defined a list component for the 'Parking' resource
export const ParkingList = () => (
    <List title="Parking" pagination={<PostPagination />} sort={{ field: 'Parking_Number', order: 'ASC' }}  empty={<Empty />} emptyWhileLoading>
        <Datagrid rowClick="show">
            <NumberField source="Parking_Number" />
            <ReferenceField label="Building Address" source="Building_Address" reference="Building" />
            <TextField source="Parking_Status"/>
            <ReferenceField label="Applicant" source="App_ID" reference="Application"/>
        </Datagrid>
    </List>
);

// Defined a show component for the 'Parking' resource
export const ParkingShow = () => (
    <Show title="Parking" empty={<Empty />} emptyWhileLoading>
        <SimpleShowLayout>
            <NumberField source="Parking_Number" />
            <ReferenceField label="Building Address" source="Building_Address" reference="Building" />
            <TextField source="Parking_Status"/>            
            <ReferenceField label="Applicant" source="App_ID" reference="Application"/>
        </SimpleShowLayout>
    </Show>
);

// Defined an edit component for the 'Parking' resource
export const ParkingEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="Parking_Number" /> 
            <ReferenceInput label="Building Address" source="Building_Address" reference="Building" />
            <SelectInput source="Parking_Status" choices={[
                    { id: 'Empty', name: 'Empty' },
                    { id: 'Assigned', name: 'Assigned' },
                     ]} />
            <ReferenceInput label="Applicant" source="App_ID" reference="Application"/>
        </SimpleForm>
    </Edit>
);

