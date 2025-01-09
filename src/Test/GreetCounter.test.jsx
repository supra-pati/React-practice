import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Greet from "../Components/Greet";

describe("Greet Component Tests", () => {
  describe("Counter Functionality", () => {
    test("Initially counter value should be 0", () => {
      render(<Greet />);
      const counterElement = screen.getByTestId("cnt");
      expect(counterElement).toHaveTextContent("0");
    });

    test("Counter should increment by 1 when add button is clicked", () => {
      render(<Greet />);
      const addButton = screen.getByText("add");
      const counterElement = screen.getByTestId("cnt");

      fireEvent.click(addButton);
      expect(counterElement).toHaveTextContent("1");

      fireEvent.click(addButton);
      expect(counterElement).toHaveTextContent("2");
    });

    test("Counter should decrement by 1 when sub button is clicked", () => {
      render(<Greet />);
      const subButton = screen.getByText("sub");
      const counterElement = screen.getByTestId("cnt");

      fireEvent.click(subButton);
      expect(counterElement).toHaveTextContent("-1");
    });
  });

  describe("Text Toggle Functionality", () => {
    test("Initial text should show welcome message", () => {
      render(<Greet />);
      const textElement = screen.getByTestId("text");
      expect(textElement).toHaveTextContent("hii, u can click the button!!");
    });

    test("Text should change when clickme button is clicked", () => {
      render(<Greet />);
      const button = screen.getByText("clickme!!");
      const textElement = screen.getByTestId("text");

      fireEvent.click(button);
      expect(textElement).toHaveTextContent("you have clicked the button");
    });
  });

  describe("Flag Toggle Functionality", () => {
    test("Flag should initially be false", () => {
      render(<Greet />);
      const flagElement = screen.getByText("false");
      expect(flagElement).toBeInTheDocument();
    });

    test("Flag should toggle between true and false when toggle button is clicked", () => {
      render(<Greet />);
      const toggleButton = screen.getByText("toggle");

      fireEvent.click(toggleButton);
      expect(screen.getByText("true")).toBeInTheDocument();

      fireEvent.click(toggleButton);
      expect(screen.getByText("false")).toBeInTheDocument();
    });
  });

  describe("Time-based Greeting", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    test("Should display morning greeting between 4:00 and 11:59", () => {
      const morningTime = new Date();
      morningTime.setHours(10);
      jest.setSystemTime(morningTime);

      render(<Greet />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Good morning/i
      );
    });

    test("Should display noon greeting at 12:00", () => {
      const noonTime = new Date();
      noonTime.setHours(12);
      noonTime.setMinutes(0);
      jest.setSystemTime(noonTime);

      render(<Greet />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Good noon/i
      );
    });

    test("Should display afternoon greeting between 12:01 and 15:59", () => {
      const afternoonTime = new Date();
      afternoonTime.setHours(14);
      jest.setSystemTime(afternoonTime);

      render(<Greet />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Good afternoon/i
      );
    });

    test("Should display night greeting after 16:00", () => {
      const nightTime = new Date();
      nightTime.setHours(20);
      jest.setSystemTime(nightTime);

      render(<Greet />);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Good night/i
      );
    });
  });

  describe("Document Title Updates", () => {
    test("Document title should update when counter changes", () => {
      render(<Greet />);
      const addButton = screen.getByText("add");

      fireEvent.click(addButton);
      expect(document.title).toBe("You clicked 1 times");

      fireEvent.click(addButton);
      expect(document.title).toBe("You clicked 2 times");
    });
  });
});
