import {User} from '../types/Types'
import {PROJECT_REGEX} from "../consts/Consts";
import {toast} from 'react-toastify'

export const loginValidation = (values: User | null) => {
    /**
     * Email - Must
     * - '@', '.'이 꼭 들어가야함.
     * Password - Must
     * - 8자 이상 입력
     */
    let errMsg = "";
    let isPass = false;
    if(values == null) {
        errMsg = "아이디와 비밀번호를 입력해주세요";
    }else{
        if(values.email == "" || values.email == undefined) {
            errMsg = "이메일을 입력해주세요";
        }else if(!PROJECT_REGEX.EMAIL.test(values.email)){
            errMsg = "이메일에는 '@', '.'이 꼭 들어가야합니다.";
        }else if(values.password == "" || values.password == undefined){
            errMsg = "비밀번호를 입력해주세요";
        }else if(values.password?.length < 8) {
            errMsg = "비밀번호는 8자 이상으로 입력해주세요.";
        }else{
            isPass = true;
        }
    }
    if(!isPass) {
        toast.error(errMsg);
    }
}