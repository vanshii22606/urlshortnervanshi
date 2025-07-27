import { Avatar, Container, Stack, Text, Tooltip, TooltipGroup } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Service from '../utils/http';
import { IconStar } from '@tabler/icons-react';

const service = new Service();

export const Profile = () => {
    const[profileData, setProfileData] = useState(null);
    async function getProfileData() {
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
        }
    useEffect(() => {
      getProfileData();
    }, []);

    return (
      <Container size={"xs"}>
        <Stack
          h={300}
          bg="var(--mantine-color-body)"
          align="center"
          justify="center"
          gap="lg"
        >
        
          <Avatar spacing="sm" size = "xl" src={profileData?.avatar} />
            
             
       
        <Text tt="uppercase">
          {" "}
          <strong> Email: </strong> {profileData?.email}
        </Text>
        <Text tt="capitalize">
          <strong>Name : </strong> {profileData?.name}
        </Text>
         <Text tt="capitalize">
          <strong> ID: </strong> {profileData?._id}
        </Text>
         <Text tt="capitalize">
          <strong> Created at: </strong> {profileData?.createdAt}
        </Text>
        </Stack>
      </Container>
    );
}
