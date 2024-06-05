import { useSession } from "next-auth/react";
import { SelectUser } from "../lib/definitions";

function PageContent({ user }: { user: SelectUser }){
    const {data:session, status} = useSession();


    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (!session || !session.user || session.user.id !== user.id.toString()) {
        return <div>You are not authorized to view this page.</div>;
    }

    return (
        <>
            <h1>{user.role === 'seller' ? 'Buyer Profile Page' : 'User Profile Page'}</h1>
        </>
    );
}

export default PageContent