const initialData = {
    userData: {
        data: {
            name: `Student Demo`,
            email: `Studen@demo.com`,
            identityNumber:`32101000000000`,
            identityType:`CNIC`,
            Nationality:`Pakistan`
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
    pages: Page
}
interface Action {
    playload: list;
    type: string;
    loginuser: () => void;
}
const stdLoginReducer = (state = initialData, action: Action) => {
    switch (action.type) {
        case `login_Student`:
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
export default stdLoginReducer