import Head from "next/head";
import { getSession } from "next-auth/client";

import { Header } from "../components/Header";
import { ActionBar } from "../components/ActionBar";
import { Question } from "../components/Question";

const questions = [
  {
    user: {
      name: "Student Name",
      image: "https://ui-avatars.com/api/?name=Student+Name&background=random",
    },
    title: "How to swap two values in an array?",
    answered: false,
    course: "CS 142",
    replies: 0,
  },
  {
    user: {
      name: "Student Name",
      image: "https://ui-avatars.com/api/?name=Student+Name&background=random",
    },
    title: "How to free a memory address in C?",
    answered: true,
    course: "CS 224",
    replies: 10,
  },
  {
    user: {
      name: "Student Name",
      image: "https://ui-avatars.com/api/?name=Student+Name&background=random",
    },
    title: "How do I SSH into the lab machine?",
    answered: false,
    course: "CS 236",
    replies: 5,
  },
];

export default function Explore({ session }) {
  return (
    <>
      <Head>
        <title>Why CS? - Explore</title>
      </Head>
      <div className="bg-gray-50 min-h-screen w-full max-w-md mx-auto flex flex-col">
        <Header title="Explore" />
        <main className="mt-4 flex-grow mb-32">
          {questions.map((question, id) => (
            <Question
              key={id}
              question={question}
              answered={question.answered}
            />
          ))}
        </main>
        <ActionBar />
      </div>
    </>
  );
}

export const getServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};