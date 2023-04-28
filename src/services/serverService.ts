import { Customer } from "@/models/customer.model";
import { Product } from "@/models/product.model";
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


//Product
export const fecthProducts =async (): Promise<Product>=> {
    const {data:response}=await httpClient.get<Product>('/products')
    return response  
}

//Customer
export const fecthCustomers =async (): Promise<Customer>=> {
    const {data:response}=await httpClient.get<Customer>('/customers')
    return response  
}

    
