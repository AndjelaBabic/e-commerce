import React from 'react'; 
import Directory from '../../components/cover-page/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
import './homepage.styles.scss';


const HomePage = () => (
    <HomePageContainer>
        <Directory></Directory>
    </HomePageContainer>
   
)

export default HomePage; 