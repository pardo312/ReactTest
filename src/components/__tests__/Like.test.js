import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../Like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("Defaults to Inactive label", () => {
  const label = container.querySelector("p");
  expect(label.textContent).toBe("Likes: 0");
});

it("Likes increment", () => {
  const button = container.querySelector("#increment");
  const label = container.querySelector("p");
  const before = label.textContent.split(" ")
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(label.textContent).toBe("Likes: " + (+before[1]+1));
});

it("Likes decrement", () => {
  const button = container.querySelector("#decrement");
  const label = container.querySelector("p");
  const before = label.textContent.split(" ")
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(label.textContent).toBe("Likes: " + (+before[1]-1));
})


