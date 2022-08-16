import {User} from '../types/Types'
import {PROJECT_REGEX} from "../consts/Consts";
import {toast} from 'react-toastify'

/**
 * 이메일, 비밀번호 유효성 체크 후 만족하지 못하는 결과인 경우 toast 이벤트 생성
 * @param {User} values - 이메일, 비밀번호 정보를 가지고있는 데이터
 */
export const loginValidation = (values: User | null): boolean => {
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
    // 유효성 체크 후 통과 못하는 경우
    if(!isPass) {
        // error toast 생성
        toast.error(errMsg);
    }
    return isPass;
}