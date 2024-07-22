# Technical Documentation

## Overview

This document provides a detailed description of the components and contexts used in the project. The components include `AddPost`, `Button`, `Comments`, `Input`, `Login`, `Post`, and `SignUp`, and the context includes `ModalContext`.

---

## Components

### 1\. AddPost

**Description:**\
`AddPost` allows users to create new posts. Users can select an emoticon, enter post content, and submit the post. If the user is not logged in, they are prompted to log in.

**Props:**

- `setHomePostData`: A state setter function for updating the post data on the home screen.

**State:**

- `showEmoticons`: Boolean flag to show/hide emoticons.
- `postData`: Object containing the selected emoticon and post content.

**Functions:**

- `handleEmoticonClick(emoticon: string)`: Updates the selected emoticon and hides the emoticons menu.
- `handleOnPress()`: Adds the new post to the home post data or prompts the user to log in.
- `getButtonState()`: Determines the button state based on whether the content is present.

**Usage:**

`<AddPost setHomePostData={setHomePostData} />`

---

### 2\. Button

**Description:**\
`Button` is a reusable component that supports different states (loading, active, disabled) and variants (fullWidth, autoWidth).

**Props:**

- `variant`: Defines the button width (`fullWidth` or `autoWidth`).
- `label`: Text displayed on the button.
- `onClick`: Function to handle button click events.
- `state`: Defines the button state (`loading`, `active`, or `disabled`).
- `type`: Defines the button type (`submit`, `reset`, `button`).

**Usage:**

`<Button
  label="Post"
  onClick={handleOnPress}
  variant="autoWidth"
  state={getButtonState()}
/>`

---

### 3\. Comments

**Description:**\
`Comments` displays individual comments for a post, including the commenter's profile picture, name, comment text, and timestamp.

**Props:**

- `comment`: Object containing comment details such as `profilePicture`, `name`, `comment`, and `dateAndTime`.

**Usage:**

`<Comments comment={comment} />`

---

### 4\. Input

**Description:**\
`Input` is a customizable input field with support for leading and trailing elements, labels, and different input modes (grey or dark).

**Props:**

- `type`: Input type (text, email, password, etc.).
- `placeholder`: Placeholder text.
- `label`: Label for the input field.
- `trailingLabel`: Optional label for trailing actions.
- `leadingElement`: Optional element displayed before the input.
- `trailingElement`: Optional element displayed after the input.
- `value`: Current value of the input.
- `onChange`: Function to handle input changes.
- `onTrailingLabelPressed`, `onLeadingElementPressed`, `onTrailingElementPressed`: Functions for handling element presses.
- `mode`: Defines the input mode (`grey` or `dark`).

**Usage:**

`<Input
  label="Email"
  type="email"
  value={value.email}
  onChange={(e) => setValue({ ...value, email: e.target.value })}
/>`

---

### 5\. Login

**Description:**\
`Login` component provides a form for users to log in to their account. It includes fields for email/username and password, and supports password visibility toggle.

**Props:**

- `isModal`: Optional boolean to determine if the component is rendered as a modal.

**State:**

- `value`: Object containing `userId` and `password`.
- `error`: Error message for invalid login.
- `inputType`: Type of the password input field (`password` or `text`).

**Functions:**

- `handleLogin(e: React.FormEvent)`: Handles the login form submission.

**Usage:**

`<Login isModal={true} />`

---

### 6\. Post

**Description:**\
`Post` displays individual posts, including the post content, mood icon, and comments. It supports toggling comments visibility and viewing more comments.

**Props:**

- `data`: Object containing post details such as `comments`, `commentsCount`, `content`, `dateAndTime`, `isEdited`, `moodIcon`, `name`, and `profilePicture`.

**State:**

- `areCommentsVisible`: Boolean flag to show/hide comments.
- `visibleComments`: Number of comments currently visible.

**Functions:**

- `handleViewMore()`: Loads more comments.
- `handleToggleComments()`: Toggles the visibility of comments.

**Usage:**

`<Post data={postData} />`

---

## Contexts

### ModalContext

**Description:**\
Provides a context for managing modal visibility and content.

**Provider:**

- `ModalProvider`: Wraps the application to provide modal functionalities.

**State:**

- `isModalOpen`: Boolean flag to indicate if the modal is open.
- `modalContent`: Content to be displayed in the modal.

**Functions:**

- `showModal(content: ReactNode)`: Displays the modal with the provided content.
- `hideModal()`: Hides the modal.

**Usage:** Wrap your application with `ModalProvider` and use `useModal` hook to access modal functionalities.

`const { showModal, hideModal, isModalOpen, modalContent } = useModal();`
