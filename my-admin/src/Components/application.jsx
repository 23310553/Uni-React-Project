import { SelectField, FileField, Datagrid, DateField, List, NumberField, ReferenceField, TextField, Show, SimpleShowLayout, Edit, NumberInput, FormDataConsumer, ReferenceInput, BooleanInput, FileInput, Link, } from 'react-admin';
import { TabbedForm, Create, SimpleForm, TextInput, DateInput, required, SelectInput, CreateButton } from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import './component.css'
import { pbProvider } from '../App';

// empty component that provides info about application process
const Empty = () => (
    <Box textAlign="center" m={1} className='empty'>
        <Box class='emptyContent'>
            <Typography paragraph>
                Welcome to StelStay Community brought to you by Macrosoft!
            </Typography>
            <Typography variant="h4" >
                Get started by filling out an application form:
            </Typography>
                <CreateButton label="Create application" resource='Application' sx={{fontSize:'20px', color: '#FD7EA7'}}/>
            <Typography variant="h5" >
                For a successful application, input your information carefully and accurately. Any updates to personal information or the like will have to be emailed to our team at  
            </Typography>
            <Typography sx={{textDecoration: 'underline', fontSize:'18px'}}>
                admin@macrosoft.com
            </Typography>
            <Typography variant="h6" >
            Thank you for choosing us!
            </Typography>
        </Box>
    </Box>
);

// defined list form for application
export const ApplicationList = () => (
    // points to empty component when there are no elements to display, and creates a blank laoding page
    <List empty={<Empty />} title= "Application" emptyWhileLoading > 
        <Datagrid rowClick="show">
            <TextField source="Status"/>
            <TextField source="First_Names" validate={[required()]} />
            <TextField source="Last_Name" validate={[required()]} />
            <TextField source="Email" validate={[required()]} />
            <TextField source="ID_or_Passport_Number"/>
            <TextField source="Phone_Number" validate={[required()]} />
            <TextField source="Lease_Year" />
            <TextField source="Student_Number" validate={[required()]} />
            <TextField source="Study_Program" />
            <TextField source="Study_Year" />
            <TextField source="Building_Preference"/>
            <TextField source="Apartment_Preference" />
            <TextField source="Bill_Payer_First_Name" validate={[required()]} />
            <TextField source="Bill_Payer_Last_Name" validate={[required()]} />
            <TextField source="Bill_Payer_Email" validate={[required()]} />
            <TextField source="Bill_Payer_ID_Number" validate={[required()]}/>
            <TextField source="Bill_Payer_Phone_Number" validate={[required()]} />
            <TextField source="Payment_Method" />
        </Datagrid>
    </List>
);

// defined a show for for application
export const ApplicationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source ="Status" />
            <TextField source="First_Names" /> 
            <TextField source="Last_Name" />
            <TextField source="Email" />
            <TextField source="ID_or_Passport_Number"/>
            <TextField source="Phone_Number" />
            <TextField source="Lease_Year" />
            <TextField source="Student_Number" />
            <TextField source="Study_Program" />
            <NumberField source="Study_Year" />
            <TextField source="Building_Preference" />
            <TextField source="Apartment_Preference"/>
            <TextField source="Bill_Payer_First_Name" />
            <TextField source="Bill_Payer_Last_Name" />
            <TextField source="Bill_Payer_Email" />
            <TextField source="Bill_Payer_ID_Number" />
            <TextField source="Bill_Payer_Phone_Number" />
            <TextField source="Payment_Method" />
        </SimpleShowLayout>
    </Show>
);

// created a edit form for application using a tabbed form, with different sections on each page
export const ApplicationEdit = () => (
    <Edit>
        <TabbedForm shouldUnregister>
            {/* Tab for Application */}
            <TabbedForm.Tab label="Application">
                <TextInput source="First_Names" validate={[required()]} />
                <TextInput source="Last_Name" validate={[required()]} />
                <TextInput source="Email" validate={[required()]} />
                <TextInput source="ID_or_Passport_Number"  placeholder='ID/Passport Number' />
                <TextInput source="Phone_Number" validate={[required()]} />
                <SelectInput source="Lease_Year" choices={[
                    { id: '2023/2024', name: '2023/2024' },
                    { id: '2024/2025', name: '2024/2025' },
                    { id: '2025/2026', name: '2025/2026' }, 
                    { id: '2026/2027', name: '2026/2027' },
                ]} />
            </TabbedForm.Tab>
                {/* Tab for Study Information */}
            <TabbedForm.Tab label="Study Information">
                <TextInput source="Student_Number" validate={[required()]} />
                <TextInput source="Study_Program" />
                <SelectInput source="Study_Year" choices={[
                    { id: '1', name: 1 },
                    { id: '2', name: 2 },
                    { id: '3', name: 3 }, 
                    { id: '4', name: 4 },
                ]} />
            </TabbedForm.Tab>
            {/* Tab form for Accomodation Preferences */}
            <TabbedForm.Tab label="Accomodation Preferences">
                <SelectInput source="Building_Preference" choices={[
                    { id: 'Samsung Building', name: 'Samsung Building' },
                    { id: 'Huawei Building', name: 'Huawei Building' },
                ]} />
                <SelectInput source="Apartment_Preference" choices={[
                        { id: 'Single', name: 'Single' },
                        { id: 'Two Bedroom', name: 'Two Bedroom' },
                        { id: 'Three Bedroom', name: 'Three Bedroom'},
                    ]} />
                <BooleanInput source ="Parking_Bay" />
                    <FormDataConsumer>
                        {({ formData, ...rest }) => formData.Parking_Bay && 
                        <>
                            <TextInput source="Car_Registration" {...rest} />
                            <TextInput source="Car_Make_and_Model" {...rest} />
                        </>
                        }
                    </FormDataConsumer>
            </TabbedForm.Tab>
            {/* Tab form for Bill Payer */}
            <TabbedForm.Tab label="Bill Payer">
                <TextInput source="Bill_Payer_First_Name" validate={[required()]} />
                <TextInput source="Bill_Payer_Last_Name" validate={[required()]} />
                <TextInput source="Bill_Payer_Email" validate={[required()]} />
                <TextInput source="Bill_Payer_ID_Number" validate={[required()]}/>
                <TextInput source="Bill_Payer_Phone_Number" validate={[required()]} />
                <SelectInput source="Payment_Method" choices ={[
                    {id: 'cash' , name: 'Cash'},
                    {id: 'cheque', name: 'Cheque' },
                    {id: 'EFT' , name: 'EFT' },
                    {id: 'debit order' , name: 'Debit Order'},
                ]} />
            </TabbedForm.Tab>
            {/* added tab for admin use to assign values */}
            <TabbedForm.Tab label="Status">
                <SelectInput source="Status" choices={[
                        { id: 'Pending ⏳', name: 'Pending ⏳' },
                        { id: 'Accepted ✔️', name: 'Accepted ✔️' },
                        { id: 'Rejected ✖️', name: 'Rejected ✖️' }, 
                    ]} />
                <ReferenceInput
                label="Room"
                source="Room_id"
                reference="Room"
                />
                <ReferenceInput
                label="Parking"
                source="Parking_Number"
                reference="Parking"
                />
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);

// application create form
export const ApplicationCreate = () => {
    const record = pbProvider.pb.authStore.model;
    const postDefaultValue = () => ({ 'Status': 'Pending ⏳', 'User_id': `${record.id}` });
    return (
    <Create>
        <TabbedForm shouldUnregister defaultValues={postDefaultValue}>
            {/* Tab for Application */}
            <TabbedForm.Tab label="Application">
            <TextInput source="Status" label="Status" disabled /> 
            <ReferenceInput
                label="Username"
                source="User_id"
                reference="Users"
                disabled/>
            {/* set required field to force user to go to next tab */}
            <TextInput source="First_Names" validate={[required()]} />
            <TextInput source="Last_Name" validate={[required()]} />
            <TextInput source="Email" validate={[required()]} />
            <TextInput source="ID_or_Passport_Number"  label="ID/Passport Number" placeholder='ID/Passport Number' />
            <TextInput source="Phone_Number" validate={[required()]} />
            <SelectInput source="Lease_Year" choices={[
                { id: '2023/2024', name: '2023/2024' },
                { id: '2024/2025', name: '2024/2025' },
                { id: '2025/2026', name: '2025/2026' }, 
                { id: '2026/2027', name: '2026/2027' },
            ]} />
        </TabbedForm.Tab>
        {/* Tab for Study Information */}
        <TabbedForm.Tab label="Study_Information">
            <TextInput source="Student_Number" validate={[required()]} />
            <TextInput source="Study_Program" />
            <SelectInput source="Study_Year" choices={[
                { id: '1', name: 1 },
                { id: '2', name: 2 },
                { id: '3', name: 3 }, 
                { id: '4', name: 4 },
            ]} />
        </TabbedForm.Tab>
        {/* Tab form for Accomodation Preferences */}
        <TabbedForm.Tab label="Accomodation Preferences">
            <SelectInput source="Building_Preference" choices={[
                { id: 'Samsung Building', name: 'Samsung Building' },
                { id: 'Huawei Building', name: 'Huawei Building' },
            ]} />
            <SelectInput source="Apartment_Preference" choices={[
                { id: 'Single', name: 'Single' },
                { id: 'Two Bedroom', name: 'Two Bedroom' },
                { id: 'Three Bedroom', name: 'Three Bedroom'},
            ]} />
            <BooleanInput source ="Parking_Bay" />
                <FormDataConsumer>
                    {({ formData, ...rest }) => formData.Parking_Bay && 
                    <>
                        <TextInput source="Car_Registration" {...rest} /> 
                        <TextInput source="Car_Make_and_Model" {...rest} />
                    </>}
                </FormDataConsumer>
            </TabbedForm.Tab>
            {/* Tab form for Bill Payer */}
            <TabbedForm.Tab label="Bill Payer">
                <TextInput source="Bill_Payer_First_Name" validate={[required()]} />
                <TextInput source="Bill_Payer_Last_Name" validate={[required()]} />
                <TextInput source="Bill_Payer_Email" validate={[required()]} />
                <TextInput source="Bill_Payer_ID_Number" label="ID Number" validate={[required()]}/>
                <TextInput source="Bill_Payer_Phone_Number" validate={[required()]} />
                <SelectInput source="Payment_Method" choices ={[
                    {id: 'Cash' , name: 'Cash'},
                    {id: 'Cheque', name: 'Cheque' },
                    {id: 'EFT' , name: 'EFT' },
                    {id: 'Debit Order' , name: 'Debit Order'},
                ]} />
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>)
};





