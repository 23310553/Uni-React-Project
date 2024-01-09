import { Datagrid, DateField, List, NumberField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

// Defined a list component for the 'Apartment' resource
export const ApartmentList = () => (
    <List title="Apartment">
        <Datagrid rowClick="list">
            <DateField source="Apartment_Lease" />
            <NumberField source="Apartment_Number" />
            <TextField source="Apartment_Status" />
            <TextField source="Apartment_rooms" />
            <ReferenceField label="Building" source="Buildings" reference="Building_Name" />
            <ReferenceField label="Rooms" source="Rooms" reference="Room_Number" />
        </Datagrid>
    </List>
);
// Defined a show form for 'Apartment' resource
export const ApartmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <DateField source="Apartment_Lease" />
            <NumberField source="Apartment_Number" />
            <TextField source="Apartment_Status" />
            <TextField source="Apartment_rooms" />
            <ReferenceField label="Building" source="Building" reference="Building_Name" />
            <ReferenceField label="Rooms" source="Rooms" reference="Room_Number" />
        </SimpleShowLayout>
    </Show>
);

