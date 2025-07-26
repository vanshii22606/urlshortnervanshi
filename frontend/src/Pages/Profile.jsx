import { Text } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Service from '../utils/http';

const service = new Service();

export const Profile = () => {
    const[profileData, setProfileData] = useState(null);
    async function getProfileData() {
        let data = await service.get("user/me");
        setProfileData(data);
        console.log(data);
        }
    useEffect( ()=>{
        getProfileData();
    },[])
    
  return (
    <div>
        {profileData?.avatar}
    </div>
  )
}
