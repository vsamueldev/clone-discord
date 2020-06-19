import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Categoty, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Categoty>
                <span>Canais de Texto</span>
                <AddCategoryIcon />
            </Categoty>

            <ChannelButton channelName="chat-livre" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="lolzinho" />
            <ChannelButton channelName="csgo" />
            <ChannelButton channelName="valorant" />
        </Container>
    );
};
    
export default ChannelList;