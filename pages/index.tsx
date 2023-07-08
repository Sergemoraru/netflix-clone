import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPage, NextPageContext } from "next"
import { getSession, signOut } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

    if (!session) {
      return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}


export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
    <h1 className='text-white'>Homepage</h1>
    <p className="text-white ">Logged in as: {user?.name}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>Logout!</button>
    </>
  )
}