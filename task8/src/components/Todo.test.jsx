import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import Todo from "./Todo";

test("renders todo", () => {
  render(<Todo />);
  expect(screen.getByText("Todo App")).toBeInTheDocument();
});

test("add new task", async () => {
  render(<Todo />);

  const input = screen.getByPlaceholderText("Enter task");
  const button = screen.getByText("Add");

  await userEvent.type(input, "testing");
  await userEvent.click(button);

  expect(screen.getByText("testing")).toBeInTheDocument();
});
