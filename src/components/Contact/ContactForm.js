import { useState } from "react";
import ContactFormDataService from "./../../services/contactForm";

import {
  FormLabel,
  FormControl,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const toast = useToast();

  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    // Validate inputs
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please complete required fields",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    // Validate email
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    // Send message
    setFormSubmitting(true);
    ContactFormDataService.sendForm(data)
      .then((res) => {
        if (res.status === 200) {
          clearForm();
          toast({
            title: "Thank you!",
            description: "Your message has been sent.",
            status: "success",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
          setFormSubmitting(false);
        } else {
          console.error("Error sending message");
          setFormSubmitting(false);
        }
      })
      .catch((err) => {
        console.error("Problem sending message: ", err);
        setFormSubmitting(false);
      });
  };

  return (
    <div>
      <form>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input
            my={4}
            variant="flushed"
            name="name"
            value={name}
            placeholder="Your name here"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            my={4}
            variant="flushed"
            type="email"
            name="email"
            value={email}
            placeholder="example@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Input
            my={4}
            variant="flushed"
            size="lg"
            type="text"
            name="message"
            value={message}
            placeholder="Your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>
        <Button
          type="submit"
          onClick={handleSubmit}
          colorScheme="teal"
          isLoading={formSubmitting}
        >
          Submit
        </Button>
        <Button
          variant="ghost"
          onClick={clearForm}
          ml={2}
          _hover={{ borderBottom: "1px solid red" }}
        >
          Reset
        </Button>
      </form>
    </div>
  );
};
