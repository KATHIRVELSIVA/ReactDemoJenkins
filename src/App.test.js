import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

xdescribe('My Test Suite', () => {

  test('Test Case-1', () => {
    render(<App />);
    var element1 = screen.getByTestId("MyHeading");
    // var text1 = screen.getByText('Welcome to JEST');
    expect(element1).toBeInTheDocument();
    expect(element1).toHaveTextContent('Welcome to JEST');
  });

  it('Test Case-2', () => {
    render(<App />);
    var text2 = screen.getByText('Hello Kathir');
    expect(text2).toBeInTheDocument();
  });

});


//MyCalculator Test Suite
describe("My Calculator Test Suite", () => {

  test('TestCase-1[Render All UI]', () => {
    render(<App />);
    const txtNumOne = screen.getByTestId('txtNumOne');
    const txtNumTwo = screen.getByTestId('txtNumTwo');
    const btnSubmit = screen.getByTestId('btnSubmit');
    expect(txtNumOne).toBeInTheDocument();
    expect(txtNumTwo).toBeInTheDocument();
    expect(btnSubmit).toBeInTheDocument();
  });

  test('Test Case-2[Render All Labels and Text Message]', () => {
    render(<App />);
    const heading = screen.getByTestId("Heading");
    const lblNumOne = screen.getByTestId("lblNumOne");
    const lblNumTwo = screen.getByTestId("lblNumTwo");
    const Result = screen.getByTestId("Result");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Addition of Two numbers");

    expect(lblNumOne).toBeInTheDocument();
    expect(lblNumOne).toHaveTextContent("Enter no one");

    expect(lblNumTwo).toBeInTheDocument();
    expect(lblNumTwo).toHaveTextContent("Enter no two");

    expect(Result).toBeInTheDocument();
    expect(Result).toHaveTextContent("Sum :");

  });

  test('Test Case-3 [Testing Textboxes Initial Value]', () => {
    render(<App />);
    const txtNumOne = screen.getByTestId("txtNumOne");
    const txtNumTwo = screen.getByTestId("txtNumTwo");
    expect(txtNumOne).toHaveTextContent('');
    expect(txtNumTwo).toHaveTextContent('');
  });

  test('Test Case-4 [Testing Empty or Blank Input]', () => {
    render(<App />);
    const btnSubmit = screen.getByTestId("btnSubmit");
    fireEvent.click(btnSubmit);
    const Result = screen.getByTestId("Result");
    expect(Result).toHaveTextContent("Sum : NaN");
  });

  test('Test Case-5 [Testing Success Result]', () => {
    render(<App />);
    const txtNumOne = screen.getByTestId("txtNumOne");
    const txtNumTwo = screen.getByTestId("txtNumTwo");
    const btnSubmit = screen.getByTestId("btnSubmit");

    fireEvent.change(txtNumOne, { target: { value: 10 } });
    fireEvent.change(txtNumTwo, { target: { value: 20 } });

    fireEvent.click(btnSubmit);
    const Result = screen.getByTestId("Result");
    expect(Result).toHaveTextContent("Sum : 30");

  });

});