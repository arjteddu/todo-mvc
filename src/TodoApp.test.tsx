import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TodoApp from "./components/TodoApp";

test("add todo", async () => {
  const { getByPlaceholderText, getByText } = render(<TodoApp />);
  const input = getByPlaceholderText("What needs to be done?");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

  await waitFor(() => {
    expect(getByText("New Todo")).toBeInTheDocument();
  });
});

test("delete todo", async () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<TodoApp />);
  const input = getByPlaceholderText("What needs to be done?");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

  await waitFor(() => {
    expect(getByText("New Todo")).toBeInTheDocument();
  });

  const deleteButton = getByText("×"); // Assuming this is your delete button text or icon
  fireEvent.click(deleteButton);

  await waitFor(() => {
    expect(queryByText("New Todo")).toBeNull();
  });
});
