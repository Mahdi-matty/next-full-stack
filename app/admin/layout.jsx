import AuthProvider from "@utils/AuthProvider"

const AdminLayout = ({children})=>{
    return (
        <>
            <AuthProvider>
                {children}
            </AuthProvider>
        </>
    )

}
export default AdminLayout