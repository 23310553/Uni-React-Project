import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout } from 'react-admin';

// Defined a list component for the 'Building' resource
export const BuildingList = () => (
    <List title="Building">
        <Datagrid rowClick="show">
            <TextField source="Building_Name" />
            <TextField source="Building_Address" />
        </Datagrid>
    </List>
);

// Defined a show component for the 'Building' resource
export const BuildingShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Building_Address" />
            <TextField source="Building_Name" />
        </SimpleShowLayout>
    </Show>
);