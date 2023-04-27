import { Signin } from "@/models/signin.model";
import  httpClient  from "@/utils/httpClient";



type SiginINProps={
    username:string
    password: string
}

//authentication
export const signIn =async (credential:SiginINProps):Promise<Signin> => {
    const {data:response}=await httpClient.post<Signin>('/auth',credential)
    return response
}


export const signOut =async ():Promise<void> => {
    await httpClient.post('auth/logout',null)
}