import { render, screen, fireEvent } from "@testing-library/react";
import { CommentBox } from "../components/CommentBox";

test("renders input and post button", () => {
  render(<CommentBox onPost={() => {}} />);

  expect(screen.getByPlaceholderText("Write comment")).toBeInTheDocument();
  expect(screen.getByText("Post")).toBeInTheDocument();
});

test("calls onPost with input value and clears input", () => {
  const mockPost = jest.fn();

  render(<CommentBox onPost={mockPost} />);

  const input = screen.getByPlaceholderText("Write comment");
  const button = screen.getByText("Post");

  fireEvent.change(input, { target: { value: "Hello" } });
  fireEvent.click(button);

  expect(mockPost).toHaveBeenCalledWith("Hello");
  expect(input).toHaveValue("");
});
