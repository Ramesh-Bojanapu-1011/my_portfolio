import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object to submit to Google Forms
    const form = new FormData();
    form.append("entry.1339294955", formData.firstName); // Replace YOUR_FIRSTNAME_FIELD_ID
    form.append("entry.700629953", formData.lastName); // Replace YOUR_LASTNAME_FIELD_ID
    form.append("entry.1097293996", formData.email); // Replace YOUR_EMAIL_FIELD_ID
    form.append("entry.759553117", formData.phone); // Replace YOUR_PHONE_FIELD_ID
    form.append("entry.15379145", formData.message); // Replace YOUR_MESSAGE_FIELD_ID

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf1Kb99sWpeZIR5O7c9JATuHIQdemkPVAcaCaEpvbdeU28TPQ/formResponse",
      {
        method: "POST",
        body: form,
        mode: "no-cors",
      },
    )
      .then(() => {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => setStatus("error"));
  };
  return (
    <div>
      <form method="Post" action="" onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Label htmlFor="phone">Phone</Label>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Label htmlFor="message">Message</Label>
        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></Textarea>
        <div className="flex items-center justify-center w-full align-middle">
          <Button
            type="submit"
            className="bg-linear-to-b from-pink-600 to-purple-600 via-purple-800"
          >
            Submit
          </Button>
        </div>
        {status === "success" && (
          <p role="status" className="mt-4 text-center text-green-700">
            Thanks, your message is on its way. I will be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p role="alert" className="mt-4 text-center text-red-700">
            Something went wrong. Please email me directly at bramesh101020@gmail.com.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
