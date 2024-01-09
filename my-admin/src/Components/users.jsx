import {  Datagrid, DateField, EmailField, List, ReferenceField, TextField, ImageField, TextInput, ImageInput } from 'react-admin';
import { PasswordInput, SelectInput, Create, SimpleForm, Show, Edit, SimpleShowLayout} from 'react-admin';

// confirms password authentication
const equalToPassword = (value, allValues) => {
    if (value !== allValues.password) {
        return 'The two passwords must match';
    }
}

// Defined a list component for the 'User' resource
export const UserList = () => (
    <List title="User"  sort={{ field: 'role', order: 'DESC' }} emptyWhileLoading>
        <Datagrid rowClick="show">
            <ImageField  source='Avatar_URL' label ="avatar"/>   
            <TextField source="username" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField source="created" />
        </Datagrid>
    </List>
);

// Defined a show component for the 'User' resource
export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <ImageField  source='Avatar_URL' label ="avatar"/>
            <TextField source="username" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField source="created" />
            <DateField source="updated" />
        </SimpleShowLayout>
    </Show>
);

// Defined a edit component for the 'User' resource
export const UserEdit = () => (
    <Edit>
        <SimpleForm >
            <ImageInput source="avatar" />
            <TextField source="username" />
            <TextField source="name" />
            <EmailField source="email" />
        </SimpleForm>
    </Edit>
);

// sets every user as student on creation
const postDefaultValue = () => ({ 'role': 'Student' });
// authentication disabled to give brand new users access to create an account
export const UserCreate = () => (
    <Create disableAuthentication defaultValues={postDefaultValue}>
        <SimpleForm>
            <ImageInput source="avatar" >
                <ImageField source="src"  title=""/>
            </ImageInput>
            <TextInput source="username" />
            <TextInput label="Full Name" source="name" />
            <TextInput source="email"/>
            <PasswordInput source="password"/>
            <PasswordInput source="passwordConfirm" validate={equalToPassword}/>
        </SimpleForm>
    </Create>
);