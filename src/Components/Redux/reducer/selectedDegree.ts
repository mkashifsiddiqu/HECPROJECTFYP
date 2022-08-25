/* eslint-disable prettier/prettier */
const initialData = {
    userData: {
        data: {
            id:`1`,
            NameOnDegree:`Super Demo`,
            QualificationLevel:`no Level`,
            year:Date.now(),
            ProgramTitle:`no Study`,
            InstituteName:`no Uni`
        },
    },
};
interface list {
    id:string,
    NameOnDegree:string,
    QualificationLevel:string,
    year:Date,
    ProgramTitle:string,
    InstituteName:string
}
interface Action {
    playload: list;
    type: string;
    loginuser: () => void;
}
const selectedDegree = (state = initialData, action: Action) => {
    switch (action.type) {
        case `selected_Degree`:
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
export default selectedDegree