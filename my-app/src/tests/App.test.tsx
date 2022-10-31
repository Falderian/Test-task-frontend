import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../components/App";

describe("renders page & checks for adding items to list", () => {
  test("add some todos & check its", () => {
    const { container } = render(<App />);
    const addBtn = screen.getByRole("button", { name: /Add/i });
    const clearBtn = screen.getAllByRole("button", { name: /Completed/i })[1];

    //adding items
    const input = screen.getByRole("textbox");
    for (let i = 0; i < 10; i++) {
      userEvent.clear(input);
      userEvent.type(input, `Test item ${i}`);
      userEvent.click(addBtn);
    }

    //trying to find recent added items
    const countItems = container.getElementsByClassName('todos__item');
    expect(countItems.length).toEqual(10);
    for(let i = 0; i < 10; i++ ) {
      expect(screen.getByText(`Test item ${i}`)).toBeInTheDocument;
    }

    //trying to set item to completed & checking last items
    const testItemCheckbox = container.querySelector('.todos__checkbox') as HTMLInputElement;
    userEvent.click(testItemCheckbox);
    expect(screen.getByText('9 items left')).toBeInTheDocument;

    //clearing completed todo and trying to find it
    userEvent.click(clearBtn);    
    expect(screen.queryByText('Test item 0')).toBeNull;
  });
});
