import { Datagrid, NumberInput, DateField, List, NumberField, ReferenceField, SimpleShowLayout, TextField, Show , Edit, ReferenceInput, SelectInput, useListContext, SimpleForm, Create}  from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import './component.css'

//Display message when student has not yet been assigned to a room with instructions on how to check their application status 
const Empty = () => (
    <Box textAlign="center" m={1} className='empty'>
        <Box className="emptyContent">
            <Typography  variant="h5">
                Oh no! It looks like you have not been assigned a room yet.
            </Typography>
            <Typography variant="h5">
                Once your application has been accepted, our team will assign you to a room in the community.
                View your application on the right to check your status.
            </Typography>
            <Typography variant="h6" >
                Direct send any questions to:
            </Typography>
            <Typography sx={{textDecoration: 'underline', fontSize:'18px'}}>
                admin@macrosoft.com
            </Typography>
            <br/>
            <Typography variant="h6" >
            Thank you for your patience!
            </Typography>
        </Box>
    </Box>
);

// Defined a list component for the 'Room' resource
export const RoomList = () => (
    <List title="Room" empty={<Empty/>} sort={{ field: 'Room_Number', order: 'ASC' }}emptyWhileLoading>
        <Datagrid rowClick="show">
            <TextField source="Building" />
            <TextField label="Apartment Number" source="Apartment_Number" />
            <NumberField source="Room_Number" />
            <TextField source="Room_Status" />
            <ReferenceField source="Applicant_id" reference="Application"/>
        </Datagrid>
    </List>
);

// Defined a show component for the 'Room' resource
export const RoomShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Building"  />
            <TextField source="Apartment_Number"  />
            <NumberField source="Room_Number" />
            <TextField source="Room_Status" />            
            <ReferenceField source="Applicant_id" reference="Application"/>
        </SimpleShowLayout>
    </Show>
);

// Defined a edit component for the 'Room' resource
export const RoomEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="Room_Number" disabled />
            <SelectInput source="Building" choices ={[
                {id:'Samsung Building: 1 Sesame Street Stellenbocsh' , name: 'Samsung Building: 1 Sesame Street Stellenbocsh'},
                {id:'Huawei Building: 2 Sesame Street Stellenbocsh' , name: 'Huawei Building: 2 Sesame Street Stellenbocsh'},
            ]} />
            <SelectInput source="Apartment_Number"choices={[
                { id: '111', name: '111' },
                { id: '112', name: '112' },
                { id: '113', name: '113' },
                { id: '114', name: '114' },
                { id: '101', name: '101' },
                { id: '102', name: '102' },
                { id: '103', name: '103' },
                { id: '104', name: '104' },
                { id: '105', name: '105' },
                { id: '206', name: '206' },
                { id: '207', name: '207' },
                { id: '208', name: '208' },
                { id: '309', name: '309' },
                { id: '310', name: '310' },
            ]}/>
            <ReferenceInput source="Applicant_id" reference="Application"/>
            <SelectInput source="Room_Status" choices ={[
                {id: 'Vacant', name: 'Vacant'},
                {id: 'Occupied', name: 'Occupied'},
            ]} />
        </SimpleForm>
    </Edit>
);

// Defined a create component for the 'Room' resource
export const RoomCreate = () => {
    const Building = [
        { name: 'Samsung Building: 1 Sesame Street Stellenbocsh', id: 'Samsung Building: 1 Sesame Street Stellenbocsh' },
        { name: 'Huawei Building: 2 Sesame Street Stellenbocsh', id: 'Huawei Building: 2 Sesame Street Stellenbocsh' },
    ];
    const Apartment_Number = [
        { name: 'Samsung Building: 1 Sesame Street Stellenbocsh', id: 'Samsung Building: 1 Sesame Street Stellenbocsh' },
        { name: 'Huawei Building: 2 Sesame Street Stellenbocsh', id: 'Huawei Building: 2 Sesame Street Stellenbocsh' },
    ];
    return (
        <Create>
            <SimpleForm>
                <NumberInput source="Room_Number" />
                <SelectInput
                    onCreate={() => {
                        const newBuildingName = prompt("Please enter the new building name.")
                        const newBuilding = { id: newBuildingName.toLowerCase(), name: newBuildingName };
                        Building.push(newBuilding);
                        return newBuilding;
                    }}
                    source="Building"
                    choices={[
                        { id: 'Samsung Building: 1 Sesame Street Stellenbocsh', name: 'Samsung Building: 1 Sesame Street Stellenbocsh'  },
                        { id: 'Huawei Building: 2 Sesame Street Stellenbocsh', name: 'Huawei Building: 2 Sesame Street Stellenbocsh' },
                    ]}
                />
                <SelectInput
                    onCreate={() => {
                        const newApartmentNumber = prompt("Please enter the new apartment number.")
                        const newApartment = { id: newApartmentNumber.toLowerCase(), name: newApartmentNumber };
                        Apartment_Number.push(newApartment);
                        return newApartment;
                    }}
                    source="Apartment_Number"
                    choices={[
                        { id: '111', name: '111'  },
                        { id: '112', name: '112' },
                        { id: '113', name: '113'  },
                        { id: '114', name: '114' },
                        { id: '101', name: '101'  },
                        { id: '102', name: '102' },
                        { id: '103', name: '103'  },
                        { id: '104', name: '104' },
                        { id: '105', name: '105'  },
                        { id: '206', name: '206' },
                        { id: '207', name: '207'  },
                        { id: '208', name: '208' },
                        { id: '309', name: '309' },
                        { id: '310', name: '310'  },
                    ]}
                />
            <ReferenceInput source="Applicant_id" reference="Application"/>
            </SimpleForm>
        </Create>
);
}