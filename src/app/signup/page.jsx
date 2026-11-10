'use client'

import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const route = useRouter();
  const onSubmit =async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    console.log(user)
     
    const { error, data } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      image: user.image,
      password:user.password
    })
  
    if (error) {
      alert('error')
    }
    if (data) {
      route.push('/');
      route.refresh()
    }

    
  };
  const handleGoogleSignUp = async () => {
    await authClient.signIn.social({
    provider: "google",
  });
  }

  return (
    
    <div className="mx-auto mt-40 ">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      <p className=" text-center mb-10">Give your Information for SignUp</p>
       <Form className="flex mx-auto my-auto flex-col gap-4" onSubmit={onSubmit} >
      <TextField
        isRequired
        name="name"
        type="name"
       
      >
        <Label>User Name</Label>
        <Input placeholder="enter your name" />
        <FieldError />
      </TextField>

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
        name="image"
        type=""
     
      >
        <Label>image</Label>
        <Input placeholder="Enter your Image" />
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

      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          SignUp
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
      </Form>
      <button onClick={handleGoogleSignUp} className="flex items-center w-full mt-5 btn btn-active"> <FcGoogle></FcGoogle> SignUp with Google</button>
   
     </div>
  );
}