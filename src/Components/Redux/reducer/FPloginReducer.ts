/* eslint-disable prettier/prettier */
const initialData = {
    userData: {
        data: {
            name: `demo`,
            email: `demo@mail.com`,
            instituteName:`Not Login to Check`,
            pages: [
               { name:`Programs Details`,
                link:`ProgramsDetail`}
            ],
        },
    },
};
interface pageType{
    name: string;
    link: string;
}
interface Page {
    pageType:[pageType]
}
interface list {
    name: string;
    email: string;
    instituteName:string;
    pages: Page
}
interface Action {
    playload: list;
    type: string;
    loginuser: () => void;
}
const loginFPReducer = (state = initialData, action: Action) => {
    switch (action.type) {
        case `login_FP`:
            {
                const { data } = action.playload;
                return {
                    ...state,
                    userData: {
                        data: data,
                    },
                };
            }
        default:
            return state;
    }
};
export default loginFPReducer