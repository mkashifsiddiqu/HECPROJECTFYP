/* eslint-disable prettier/prettier */
const initialData = {
  userData: {
    data: {
      name: `Not Login`,
      email: `demo@mail.com`,
      page: [
      //  { name:``,link:``}
      ]
    }
  },
};
interface Page {
  name: string,
  link: string,
}
interface list {
  name: string,
  email: string,
  page: Page[],
}
interface Action {
  playload: list,
  type: string,
  loginuser: () => void
}
const loginuserReducer = (state = initialData, action: Action) => {
  switch (action.type) {
    case `login_user`:
      {
        const { data } = action.playload;
        return {
          ...state,
          userData: {
            data: data,
          },
        };
      }
    // case `login_FP`:
    //   {
    //     const { data } = action.playload;
    //     return {
    //       ...state,
    //       userData: {
    //         data: data,
    //       },
    //     };
    //   }
    default:
      return state;
  }
};

// const loginFPReducer = (state = initialData, action: Action) => {
//   switch (action.type) {
//     case `login_FP`:
//       {const { data } = action.playload;
//       return {
//         ...state,
//         userData: {
//           data: data,
//         },
//       };}
//     default:
//       return state;
//   }
// };
export { loginuserReducer }