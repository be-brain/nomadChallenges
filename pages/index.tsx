import { useForm } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types";

interface LoginForm {
    name: string;
    email: string;
    password: string;
    error?: string;
}

const Forms = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<LoginForm>({
        mode: "all",
    });

    // handleSubmit(onvalid, onInvalid)
    const onvalid = (data: LoginForm) => {
        console.log("회원가입성공");
        reset();
    };
    // onvalid : 함수가 유효할때 실행

    const onInvalid = (errors: FieldErrors) => {
        console.log("에러입니다", errors);
    };
    // onInvalid : 함수가 유효하지않을때 실행

    return (
        <div>
            <form onSubmit={handleSubmit(onvalid, onInvalid)}>
                <label htmlFor="userName">Name : </label>
                <input
                    id="username"
                    type="text"
                    {...register("name", {
                        required: "이름을 입력하세요",
                    })}
                ></input>
                <p>{errors.name?.message}</p>
                <label htmlFor="userEmail">Email : </label>
                <input
                    id="userEmail"
                    type="email"
                    {...register("email", {
                        required: "이메일을 입력하세요",
                        validate: {
                            notNaver: (value) =>
                                value.includes("@naver.com") ||
                                "네이버이메일만 사용가능합니다",
                        },
                    })}
                ></input>
                <p>{errors.email?.message}</p>
                <label htmlFor="userPassword">Password : </label>
                <input
                    id="userPassword"
                    type="password"
                    {...register("password", {
                        required: "비밀번호를 입력하세요",
                        minLength: {
                            message: "최소 10글자이상 입력해주세요",
                            value: 10,
                        },
                    })}
                ></input>
                <p>{errors.password?.message}</p>
                <button type="submit">Login</button>
                {isSubmitSuccessful && <div>Good</div>}
            </form>
        </div>
    );
};

export default Forms;
