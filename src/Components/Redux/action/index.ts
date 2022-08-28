//That is for Admin
export const loginuser = (data:any) => {
  return {
    type: `login_user`,
    playload: {
      data: data,
    },
  };
};
//===========For Focal Person
export const loginFP = (data:any) => {
  return {
    type: `login_FP`,
    playload: {
      data: data,
    },
  };
};
//=============For Student
export const loginStudent = (data:any) => {
  return {
    type: `login_Student`,
    playload: {
      data: data,
    },
  };
};
// ==================For Selecting Degree
export const selectedDegree = (data:any) => {
  return {
    type: `selected_Degree`,
    playload: {
      data: data,
    },
  };
};