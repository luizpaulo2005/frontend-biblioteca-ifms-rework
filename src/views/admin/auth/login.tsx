import { AuthForm } from "../../../components/forms/auth/authForm";

export function LoginScreen(){
    return(
        <div className="w-screen min-h-screen p-3 flex justify-center items-center dark:text-white">
            <AuthForm/>
        </div>
    )
}