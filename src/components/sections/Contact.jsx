import React, { useState } from "react";
import styled from "styled-components";
import useLang from "../../hooks/useLang";
import validateForm from "../../utils/validateForm";
import Section from "../elements/Section";
import StyledSubtitle from "../elements/Subtitle";
import { AiOutlineCheckCircle } from "react-icons/ai";
import useScrollReveal from "../../hooks/useScrollReveal";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  margin-bottom: 30px;

  p {
    text-align: center;
    font-size: clamp(1.1rem, 2vw, 1.2rem);
  }
`;

const StyledForm = styled.form`
  background-color: var(--rich-black);
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  padding: 50px 30px 30px;

  display: ${({ sent }) => (sent ? "none" : "flex")};
  flex-direction: column;

  > div {
    margin-top: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1.2rem;
    position: absolute;
    background-color: var(--rich-black);
    padding: 0 10px;
    top: 15px;
    left: 15px;
    transition: all 0.1s ease;
  }

  input,
  textarea {
    border-radius: 5px;
    font-size: 1.1rem;
    padding: 15px 20px;
    border: 1px solid var(--slate-gray);
    transition: border 0.2s ease;
  }

  textarea {
    height: 200px;
  }

  input:focus,
  input:valid,
  textarea:focus,
  textarea:valid {
    border: 1px solid var(--aquamarine);
  }
  input:focus + label,
  textarea:focus + label,
  input:valid + label,
  textarea:valid + label {
    font-size: 1rem;
    top: -15px;
  }

  button {
    margin-top: 20px;
    padding: 15px 0;
    font-size: 0.9rem;
    border-radius: 5px;
    border: 1px solid var(--aquamarine);
    color: var(--aquamarine);
    transition: all 0.2s ease;

    &:hover {
      background-color: var(--teal);
    }
  }

  span {
    margin-top: 5px;
    margin-left: 10px;
    height: 1rem;
    font-size: 1rem;
    color: #e24141;
  }
`;

const Success = styled.div`
  background-color: var(--rich-black);
  max-width: 600px;
  width: 100%;
  border-radius: 8px;
  padding: 50px 30px 30px;

  display: ${({ sent }) => (sent ? "flex" : "none")};
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    color: var(--aquamarine);
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  svg {
    font-size: 6rem;
  }

  p {
    text-align: center;
    color: var(--white);
  }
`;

export default function Contact() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);
  const errorMessages = lang.errorMessages;
  const form = lang.contactForm;
  useScrollReveal(
    ["#contact-title", "#contact-title + p", "#form div", "#form button"],
    {
      origin: "bottom",
      distance: "50px",
    }
  );

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const validate = validateForm({ ...data, messages: errorMessages });
    if (Object.values(validate).every((e) => e)) {
      fetch("https://formsubmit.co/ajax/11d6291cfcc10058867e37b23e953456", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then(() => setSent(true))
        .catch((error) => console.log(error));
    }
  }

  return (
    <Section id="contact">
      <TitleWrapper>
        <StyledSubtitle id="contact-title">{lang.contact}</StyledSubtitle>
        <p>{lang.contactText}</p>
      </TitleWrapper>
      <StyledForm onSubmit={handleSubmit} sent={sent} id="form">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            title={form.name}
            required
            autoComplete="none"
          />
          <label htmlFor="name">{form.name}</label>
        </div>
        <span id="nameError"></span>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            title={form.email}
            required
            autoComplete="none"
          />
          <label htmlFor="email">{form.email}</label>
        </div>
        <span id="emailError"></span>
        <div>
          <textarea
            type="text"
            id="message"
            name="message"
            title={form.message}
            required
            autoComplete="none"
          />
          <label htmlFor="message">{form.message}</label>
        </div>
        <span id="messageError"></span>
        <button title={form.send}>{form.send}</button>
      </StyledForm>
      <Success sent={sent}>
        <div>
          <AiOutlineCheckCircle />
          <h3>{lang.formSentSuccess.title}</h3>
          <p>{lang.formSentSuccess.content}</p>
        </div>
      </Success>
    </Section>
  );
}
