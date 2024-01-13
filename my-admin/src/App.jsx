import { Admin, Resource, houseLightTheme, houseDarkTheme } from "react-admin";
import { PocketBaseProvider } from "./ra-pocketbase";
import { LoginPage } from './Components/loginPage';
import { ApplicationList, ApplicationShow, ApplicationEdit, ApplicationCreate } from "./Components/application";
import { UserCreate } from "./Components/users";
import { AnnouncementEdit, AnnouncementList, AnnouncementShow, AnnouncementCreate } from "./Components/announcement";
import { RoomCreate, RoomEdit, RoomList, RoomShow } from "./Components/room"; 
import { ParkingList, ParkingShow, ParkingEdit } from "./Components/parking";
import { ContactList } from "./Components/contactUs";
import { ComplaintCreate, ComplaintEdit, ComplaintList, ComplaintShow } from "./Components/complaint";
import { ChatList, ChatShow, ChatEdit, ChatCreate } from "./Components/chat";
import { FineCreate, FineEdit, FineList } from "./Components/fine";

// Menu Icons
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ChatIcon from '@mui/icons-material/Chat';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GavelIcon from '@mui/icons-material/Gavel';
import CampaignIcon from '@mui/icons-material/Campaign';
import GppBadIcon from '@mui/icons-material/GppBad';

// data provider linked to pocketbase and exported to use in other files
export const pbProvider = PocketBaseProvider('https://refactored-space-sniffle-q7q9qvgwp7gw399jj-8090.preview.app.github.dev'); 

export const App = () => (
  <Admin dataProvider={pbProvider.dataProvider} authProvider={pbProvider.authProvider} loginPage={LoginPage} 
  theme={houseLightTheme} darkTheme={houseDarkTheme}>
    <Resource name= "Application" list={ApplicationList} show={ApplicationShow} edit={ApplicationEdit} create={ApplicationCreate} icon={ArticleIcon} options={{ label: 'Application' }} recordRepresentation={(record) => `${record.First_Names} ${record.Last_Name}`}/>
    <Resource name ="Application_Status" recordRepresentation={(record) => `${record.Status}`}/>
    <Resource name="Building" icon={ApartmentIcon} options={{ label: 'Building' }} recordRepresentation={(record) => `${record.Building_Name} , ${record.Building_Address}`} /> 
    <Resource name="Apartment"  options={{ label: 'Apartment' }} recordRepresentation={(record) => `${record.Apartment_Number}`} /> 
    <Resource name="Room" list={RoomList} show={RoomShow} edit={RoomEdit} create={RoomCreate} icon={ApartmentIcon} options={{ label: 'Room' }} recordRepresentation={(record) => `${record.Room_Number}, ${record.Room_Status}`} />
    <Resource name="Parking" list={ParkingList} show={ParkingShow} edit={ParkingEdit} recordRepresentation={(record) => `${record.Parking_Number}, ${record.Parking_Status}`} icon={DirectionsCarIcon} options={{ label: 'Parking' }} />
    <Resource name="Users" create={UserCreate} recordRepresentation={(record) => `${record.name}`} icon={PersonIcon} options={{ label: 'User profile' }} />
    <Resource name="Complaint" list={ComplaintList} show={ComplaintShow} edit={ComplaintEdit} create={ComplaintCreate} icon={GavelIcon} options={{ label: 'Community Policies' }}/>
    <Resource name="Announcements" list={AnnouncementList} show={AnnouncementShow} edit={AnnouncementEdit} create={AnnouncementCreate} icon={CampaignIcon} options={{ label: 'Announcements' }}/>
    <Resource name="Fine" list={FineList} show={FineCreate} edit={FineEdit} create={FineCreate} icon={GppBadIcon}/>
    <Resource name="Chat" list={ChatList} show={ChatShow} edit={ChatEdit} create={ChatCreate} icon={ChatIcon} />
    <Resource name="Contact_Us" list={ContactList} icon={ContactMailIcon} options={{ label: 'Contact Us' }} />
  </Admin>
);

