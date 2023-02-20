# Regular test assignment
This repository is my solution for regular test assignment, which is nowadays sent by a lot of companies.<br />
I'll try to update it according to my skills or your remarks. <br />
Stack
- React
- Typescript
- Redux + Redux Saga
- React Router Dom v6
- Ant Design
- styled-components
- webpack + eslint
- Jest + React-testing library (tests will be written later)
## Assignment description
- Build two pages, using SWAPI
  - list of characters with pagination (/characters/) :white_check_mark:
  - detailed info about character (/characters/:characterId) :white_check_mark:
- Required stack
  - React :white_check_mark:
  - React Router Dom v6 :white_check_mark:
  - Axios :white_check_mark:
- Pros
  - Typescript :white_check_mark:
  - Neat Layout :white_check_mark:
  - Ant Design :white_check_mark:
- Extras
  - Redux + Redux Saga :white_check_mark:
  - Functional to search :white_check_mark:
  - Functional to edit character :white_check_mark:

## Solution
I've built frontend application according to the requirements of the assignmets, including extras. <br />
Edit functional: I created edit modal, which can be open by clicking on pencil button under the card and also wrote algo to handle character info update (there was no api, so I think algo is enough). Search functional was created using search API, but can be done locally. <br />
I also added error handle, it can be done in many different ways, so I didn't clear data, which is already in the store, but it can be discussed.

A few more extras I thought would be nice to have on a representation project, so I added them:
- Webpack + Eslint
- Translation
- styled-components

## FYI
In this section I'll answer some of questions you could have analyzing my code. <br />
One of assignment part is adding memorisation to the project. Why there are no in your project? <br />
It's because all optimization must be reasonable, here are some points I keept in mind: <br />
- useMemo  must be used to compute hard calculateble values and to decrease number of computations when component rerenders often
- useCallback must be used to reduce amount of times new function is created and mounted into the dom, it also must be used in often refreshing components to increase performance
- Both useMemo and useCallback decrease time of computer needed to rerender component, they don't prevent component from rerender like memo does
- memo must be used to decrease amount of rerenders
- Lazy must be used to defer time of loading parts of spa till the moment this parts are needed