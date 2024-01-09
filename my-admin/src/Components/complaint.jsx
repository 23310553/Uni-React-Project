import { Datagrid, Edit, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, CreateButton, SelectInput, TextInput, Create, SimpleForm, RichTextField } from 'react-admin';
import { Box, Button, Typography } from '@mui/material';
import './component.css';

// Display message when there are no complaints lodged
const Empty = () => (
    <Box textAlign="center" m={1} className='emptyComplaint'>
        <Box className="emptyContent" >
            <Typography  variant="h4" >
                StelStay Community Policy and Rules
            </Typography>
            <Typography paragraph>
                Welcome to our shared university residence! We are delighted to have you as a resident, and we want to ensure that your stay here is safe, comfortable, and enjoyable. To maintain a harmonious living environment, we have established a set of policies and rules that all residents must adhere to. Please read and understand these guidelines, as they are designed to promote a positive and respectful community.
            </Typography>
            <br/>
            <Typography variant="h6">
                General Rules
            </Typography>
            <Typography align='Left'>
                1. <b>Respect:</b> Respect for fellow residents, staff, and the property is essential. Treat everyone with courtesy and consideration.
            </Typography>
            <Typography align='Left'>
                2. <b>Quiet Hours:</b> Quiet hours are in effect from 10:00 PM to 8:00 AM. During this time, keep noise to a minimum to ensure a peaceful living environment.
            </Typography>
            <Typography align='Left'>
                3. <b>Guests:</b> Guests are allowed, but they must adhere to the residence's rules. Residents are responsible for the behavior of their guests.
            </Typography>
            <Typography align='Left'>
                4. <b>Safety:</b> Safety is a top priority. Please report any safety concerns or maintenance issues immediately to the residence staff.
            </Typography>
            <Typography align='Left'>
                5. <b>Cleanliness:</b> Keep shared spaces, including kitchens, bathrooms, and common areas, clean and tidy. Regularly dispose of trash in the designated bins.
                Residence Maintenance
            </Typography>
            <Typography align='Left'>
                6. <b>Furniture and Appliances:</b> Do not move, alter, or remove furniture and appliances from the common areas. If you encounter any maintenance issues, contact residence staff for assistance.
            </Typography>
            <Typography align='Left'>
                7. <b>Decorations:</b> You may decorate your personal space within reason, but do not use nails, screws, or adhesives that may damage walls or surfaces.
            </Typography>
            <Typography align='Left'>
                8. <b>Pets:</b> Pets are not allowed in the residence, with the exception of service animals as permitted by law.
            </Typography>
            <br/>
            <Typography variant="h6">
                Security
            </Typography>
            <Typography align='Left'>
                9. <b>Keys and Access Cards:</b> Do not share your keys or access cards with others. Report lost or stolen keys/cards immediately.
            </Typography>
            <Typography align='Left'>
                10. <b>Locking Doors:</b> Lock your room and the main entrance when leaving the residence. Do not allow unauthorized persons to enter the building.
            </Typography>
            <br/>
            <Typography variant="h6">
                Health and Safety
            </Typography>
            <Typography align='Left'>
                11. <b>COVID-19 Guidelines:</b> Adhere to all university and government guidelines related to COVID-19. Maintain good hygiene, wear masks in shared areas when required, and practice social distancing.
            </Typography>
            <Typography align='Left'>
                12. <b>Substances:</b> The use or possession of illegal drugs, including marijuana, is strictly prohibited. The consumption of alcohol is allowed only in accordance with university policies and local laws.
            </Typography>
            <br/>
            <Typography variant="h6">
                Community Living
            </Typography>
            <Typography align='Left'>
                13. <b>Conflict Resolution:</b> In the event of conflicts with fellow residents, please try to resolve issues through open and respectful communication. If necessary, involve residence staff for mediation.
            </Typography>
            <Typography align='Left'>
                14. <b>Diversity and Inclusion:</b> The residence is committed to diversity and inclusion. Discrimination, harassment, or hate speech will not be tolerated.
            </Typography>
            <Typography align='Left'> 
                15. <b>Internet Usage:</b> Respect bandwidth limits and use the internet responsibly. Do not engage in any illegal online activities.
            </Typography>
            <br/>
            <Typography variant="h6">
                Emergency Procedures
            </Typography>
            <Typography align='Left'>
                16. <b>Emergency Evacuation:</b> Familiarize yourself with the residence's emergency evacuation procedures, and participate in regular fire drills.
            </Typography>
            <Typography align='Left'>
                17. <b>First Aid:</b> In case of injuries or medical emergencies, contact the residence staff and seek assistance immediately.
            </Typography>
            <br/>
            <Typography variant="h6">
                Penalties for Violation
            </Typography>
            <Typography>
                Residents found in violation of these policies and rules may face disciplinary actions, including warnings, fines, or eviction, depending on the severity of the offense.
                By choosing to reside in this shared residence, you agree to comply with these policies and rules. Ignorance of these guidelines is not an excuse for non-compliance. Failure to adhere to these rules may result in fines, additional consequences as determined by residence staff and, in extreme cases, eviction.
                <br/>
                If you feel that your fellow residents are not adhering to these guidelines, please issue a formal complaint below to be investiagted by community admins.       
            </Typography>
                <CreateButton label="Submit Complaint" resource='Complaint' sx={{fontSize:'20px', color: '#FD7EA7'}}/>  
            <Typography paragraph>
                We hope you have a pleasant and productive time in our shared university residence. If you have any questions or concerns, do not hesitate to contact the residence staff. Thank you for being a part of our community!
            </Typography>    
        </Box>
    </Box>
);

// Defined a list component for the 'Complaint' resource
export const ComplaintList = () => (
    <List title="Policy" sort={{ field: 'Status', order: 'DESC' }}empty={<Empty />} emptyWhileLoading>
        <Datagrid rowClick="show">
            <TextField source="Subject" />
            <TextField source="Complaint"/>
            <TextField source="Status" />
        </Datagrid>
    </List>
);

// Defined a show component for the 'Complaint' resource
export const ComplaintShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="Subject" />
            <TextField source="Complaint"/>
            <TextField source="Status" />
        </SimpleShowLayout>
    </Show>
);

// Defined an edit component for the 'Complaint' resource
export const ComplaintEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="Subject" />
            <TextInput source="Complaint"/>
            <SelectInput source="Status" choices={[
                {id: 'Resolved' , name: 'Resolved' },
                {id: 'Unresolved', name: 'Unresolved' },
            ]} />
        </SimpleForm>
    </Edit>
);

// Setting the default value for Complaint status as unresolved
const postDefaultValue = () => ({ 'Status': 'Unresolved' });

// Defined a list component for the 'Complaint' resource
export const ComplaintCreate = () => (
    <Create>
        <SimpleForm defaultValues={postDefaultValue}>
            <TextInput source="Subject" />
            <TextInput source="Complaint"/>
            <SelectInput source="Status" choices={[
                {id: 'Resolved' , name: 'Resolved' },
                {id: 'Unresolved', name: 'Unresolved' },
            ]} disabled/>
        </SimpleForm>
    </Create>
);
