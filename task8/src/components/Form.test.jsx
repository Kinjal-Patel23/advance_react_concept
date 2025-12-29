import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest"
import Form from "./Form";

test("submit function", async () => {
    const handleSubmit = vi.fn();

    render(<Form onSubmit={handleSubmit} />);

    const button = screen.getByText("Submit");

    await userEvent.click(button);

    expect(handleSubmit).toHaveBeenCalled();
})

test("password input", async () => {
    render(<Form onSubmit={() => {}}/>);

    const passwordInput = screen.getByPlaceholderText("Password");

    await userEvent.type(passwordInput, "987654");

    expect(passwordInput).toHaveValue("987654");
})