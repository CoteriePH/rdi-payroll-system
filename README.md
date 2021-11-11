## Table of Contents

| Contents                             |          Description          |
| :----------------------------------- | :----------------------------: |
| [Building from Source](#building-from-source)             |     Getting started    |
| [Frontend](#frontend)             |      Frontend setup    |
| [Backend](#backend)     |       see [BACKEND.md](backend/README.md)       |
| [Creating a pull request](#creating-pull-request) |          How to create a pull request        |
| [Testing a pull request](#testing-a-pull-request)                       |     How to test a pull request   |
| [Packages](#packages)           | Packages |

# Building from Source

## Frontend

1. **Clone the repository**

```bash
git clone git@github.com:TempName-1/rdi-payroll-system.git
or
git clone https://github.com/TempName-1/rdi-payroll-system.git
```

2. **Checkout to dev branch**

```bash
git checkout dev
```

3. **Change directory to frontend and pull in project dependencies**

```bash
cd frontend
npm run dev
```

4. **Host the app locally**

```bash
npm start
```

## Backend

see [BACKEND.md](backend/README.md)             

# Creating Pull Request

1. **Create new branch**

```bash
git checkout -b branch-name
```

2. Push your code

```bash
git add .
git commit -m "description"
git push -u origin branch-name
```

3. Document your changes and create Pull Request

- Note: Make sure that it's in the development branch.

![image](https://user-images.githubusercontent.com/58845052/136660462-0c46db45-9022-48f4-ba36-c9427e0680d3.png)

4. Request for a review
5. If reviewer approved the PR he/you can now merge it

# Testing a Pull Request

```bash
git checkout dev
git pull
git checkout pr-branch-name
```

- Note: Make sure that it's in the development branch.

![image](https://user-images.githubusercontent.com/58845052/136660462-0c46db45-9022-48f4-ba36-c9427e0680d3.png)

4. Request for a review
5. If reviewer approved the PR he/you can now merge it

## Packages

**State Management**

Redux: https://redux.js.org/tutorials/quick-start
<br/>
Redux Toolkit: https://redux-toolkit.js.org/tutorials/quick-start
<br/>

**Form** 

React Hook Form: https://react-hook-form.com/
<br/>
Yup Validation: https://github.com/jquense/yup
<br/>

**UI**

Styled Components: https://styled-components.com/
<br/>
React Table: https://react-table.tanstack.com/
<br/>
React Modal: https://github.com/reactjs/react-modal
<br/>
React Toastify: https://github.com/fkhadra/react-toastify
<br/>

**HTTP**

Axios: https://axios-http.com/docs/intro
