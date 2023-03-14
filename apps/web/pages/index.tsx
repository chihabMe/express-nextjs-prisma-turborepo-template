import { GetServerSideProps } from "next";
import { Button } from "ui";

export default function HomePage({ data }: { data: string }) {
  return (
    <div>
      <h1>Web</h1>
      the backend says {data}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch("http://localhost:3001/hello");
    const data: string = await response.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};
