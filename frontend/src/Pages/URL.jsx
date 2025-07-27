import { Button, Container, TextInput } from "@mantine/core";
import React, { useState } from "react";
import Service from "../utils/http";

const service = new Service();

export default function URL() {

    const handleCreate =async()=>{
        console.log("Got all the fields")
        console.log(input.originalUrl);

        const data = await service.post("s", input);
        setResponse(data);
        console.log(data);

    }

  const [response, setResponse] = useState(null);
  const [input, setInput] = useState({
    originalUrl : '',
    title:'',
    expiryDate:'',
    customCode:''
  })
  return (
    <Container size="xs">
      <input type="text" id="input" />
      <TextInput
        radius="md"
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
        onChange={(e)=>{ setInput({ ...input , originalUrl :e.target.value } ) } }
      />
      {input?.originalUrl}
      <Button fullWidth onClick={handleCreate}>Create</Button>;
    </Container>
  );
}
