import React from "react";
import {render, fireEvent, screen, waitFor, prettyDOM} from "@testing-library/react";
import RegistrationForm from "./components/RegistrationForm";
import {act} from "react-dom/test-utils";

const submitSuccessMsg = 'pomyślna rejestracja'
const submitFailMsg = 'błąd walidacji'

it("Check if inputs are empty on start and checkbox is unchecked", () => {
  const handleSubmit = jest.fn();
  render(<RegistrationForm onSubmit={handleSubmit}/>);

  const nameInput = screen.getByTestId('nameInput')
  const passwordInput = screen.getByTestId('passwordInput')
  const newsletterInput = screen.getByTestId('newsletterInput')

  expect(nameInput.value).toBe('')
  expect(passwordInput.value).toBe('')
  expect(newsletterInput.checked).toBe(false)

});

it("Check if email input shows on checkbox click", async () => {
  const handleSubmit = jest.fn();
  render(<RegistrationForm onSubmit={handleSubmit}/>);

  const nameInput = screen.getByTestId('nameInput')
  const passwordInput = screen.getByTestId('passwordInput')
  const newsletterInput = screen.getByTestId('newsletterInput')

  await act(() => {
    waitFor(() => {
      fireEvent.click(newsletterInput)
    })
  })

  const emailInput = screen.getByTestId('emailInput')

  expect(nameInput.value).toBe('')
  expect(passwordInput.value).toBe('')
  expect(newsletterInput.checked).toBe(true)
  expect(emailInput.value).toBe('')

});

it("Check if correct submit message is shown for valid data (without email field)", async () => {
  const handleSubmit = jest.fn();
  render(<RegistrationForm onSubmit={handleSubmit}/>);

  const nameInput = screen.getByTestId('nameInput')
  const passwordInput = screen.getByTestId('passwordInput')
  const form = screen.getByTestId('form')

  await act(() => {

    waitFor(() => {
      fireEvent.change(nameInput, {target: {value: 'Test'}})
      fireEvent.change(passwordInput, {target: {value: 'Test12'}})
      fireEvent.submit(form)
      expect(screen.getByText(submitSuccessMsg)).toBeInTheDocument();


    })
  })

});

it("Check if correct submit message is shown for invalid data (without email field)", async () => {
  const handleSubmit = jest.fn();
  render(<RegistrationForm onSubmit={handleSubmit}/>);

  const nameInput = screen.getByTestId('nameInput')
  const passwordInput = screen.getByTestId('passwordInput')
  const form = screen.getByTestId('form')

  await act(() => {

    waitFor(() => {
      fireEvent.change(nameInput, {target: {value: 'Test'}})
      fireEvent.change(passwordInput, {target: {value: ''}})
      fireEvent.submit(form)
      expect(screen.getByText(submitFailMsg)).toBeInTheDocument();


    })
  })

});

it("Check if correct submit message is shown for valid data (with email field)", async () => {
  const handleSubmit = jest.fn();
  render(<RegistrationForm onSubmit={handleSubmit}/>);

  const nameInput = screen.getByTestId('nameInput')
  const passwordInput = screen.getByTestId('passwordInput')
  const newsletterInput = screen.getByTestId('newsletterInput')

  const form = screen.getByTestId('form')

  await act(() => {

    waitFor(() => {
      fireEvent.change(nameInput, {target: {value: 'Test'}})
      fireEvent.change(passwordInput, {target: {value: 'Test12'}})
      fireEvent.click(newsletterInput)
    })
  })

  const emailInput = screen.getByTestId('emailInput')

  await act(() => {

    waitFor(() => {
      fireEvent.change(emailInput, {target: {value: 'test@test.com'}})
      fireEvent.submit(form)
      expect(screen.getByText(submitSuccessMsg)).toBeInTheDocument();
    })
  })

});



