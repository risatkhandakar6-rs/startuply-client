'use client'

import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function SignUp() {
  const route = useRouter();
  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user)
     
    const { error, data } = await authClient.signIn.email({
      email: user.email,
      password:user.password
    })

    if (data) {
      route.push('/')
      route.refresh()
      
    }
    if (error) {
      alert('wrong info')
    }
  

    
  };

  return (
    
    <div className="mx-auto mt-40 ">
      <h1 className="text-3xl font-bold text-center">SignIn</h1>
      <p className=" text-center mb-10">Give your Information for SignIn</p>
       <Form className="flex mx-auto my-auto flex-col gap-4" onSubmit={onSubmit} >
     

      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }

          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

      

      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }

          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
        </TextField>
        
        <p>Don't have an accout? <Link href={'/signup'} className="text-blue-500">register</Link></p>

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          SignIn
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
   
     </div>
  );
}