import { Button, Container, Stack, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Service from '../utils/http'
import Response from '../Components/Response';

const service = new Service();


export default function UrlShortener() {

     const [input, setInput] = useState({
       originalUrl: "",
       customUrl: "",
       expiresAt: "",
       title: ""
   });

   const [response, setResponse] = useState(null);

   const generateShortUrl = async () => {
       console.log(input?.originalUrl);
       try {
           const data = await service.post("s", input);
           console.log(data);
           setResponse(data); // Set the response here
       } catch (error) {
           console.error("Error generating short URL:", error);
       }
   }

  return (
    <Container size="xs">
      { !response ? (
        <>
          URL Shortner
          <Stack>
            <TextInput
              onChange={(e)=>{ setInput({ ...input , originalUrl :e.target.value } ) } }
              size="md"
              radius="xl"
              label="Original Url"
              withAsterisk
              description="Input description"
              placeholder="Input placeholder"
            />
            <TextInput
              onChange={(e)=>{ setInput({ ...input , customUrl :e.target.value } ) } }
              size="md"
              radius="xl"
              label="Customize ur link (optional)"
              placeholder="Input placeholder"
            />
            <TextInput
              onChange={(e)=>{ setInput({ ...input , title :e.target.value } ) } }
              size="md"
              radius="xl"
              label="Title (optional)"
              placeholder="Input placeholder"
            />
            <TextInput
              onChange={(e)=>{ setInput({ ...input , expiresAt :e.target.value } ) } }
              type="date"
              size="md"
              radius="xl"
              label="Date Of Expiry (optional)"
              placeholder="Input placeholder"
            />
            <Button
              onClick={generateShortUrl}
              variant="outline"
              color="cyan"
              size="lg"
              radius="lg">
                Button
            </Button>
          </Stack>
        </>
      ) : (
        <Response response={response} setResponse={setResponse}/>
      )}
    </Container>
  )
}
