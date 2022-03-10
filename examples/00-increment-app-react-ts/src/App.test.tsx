import React from "react";
import "@testing-library/jest-dom";
import { test, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("loads and displays greeting", async () => {
  render(<App />);

  fireEvent.click(screen.getByText("count is: 0"));
  expect(screen.getByText("count is: 1")).toBeInTheDocument();

  fireEvent.click(screen.getByText("count is: 1"));
  expect(screen.getByText("count is: 2")).toBeInTheDocument();
});
