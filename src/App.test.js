import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Form from "./components/Form";

describe("Rendering of the app", () => {
  it("should have title TodoMatic", () => {
    const DATA = [];
    const { getByTestId } = render(<App tasks={DATA} />);
    expect(getByTestId("title")).toHaveTextContent("TodoMatic");
  });

  it("should have heading 3 tasks remaining", () => {
    const DATA = [
      { id: "todo-0", name: "Eat", completed: true },
      { id: "todo-1", name: "Sleep", completed: false },
      { id: "todo-2", name: "Repeat", completed: false },
    ];
    const { getByTestId } = render(<App tasks={DATA} />);
    expect(getByTestId("heading")).toHaveTextContent("3 tasks remaining");
  });

  it("should reduce number of tasks", () => {
    const DATA = [
      { id: "todo-0", name: "Eat", completed: true },
      { id: "todo-1", name: "Sleep", completed: false },
      { id: "todo-2", name: "Repeat", completed: false },
    ];
    const { getByTestId } = render(<App tasks={DATA} />);
    fireEvent.click(getByTestId("todo-2"));
    expect(getByTestId("heading")).toHaveTextContent("2 tasks remaining");
  });
});

describe("Rendering of Form component", () => {
  it("should have input space", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("test-input")).not.toHaveAttribute("disabled");
  });

  it("should have a working add button", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("test-input-button")).not.toHaveAttribute("disabled");
  });
});
