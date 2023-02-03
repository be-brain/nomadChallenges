import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ data }) {
    const router = useRouter();
    const goToDetail = (id) => {
        router.push(
            {
                pathname: `/person/${id}`,
                query: { id },
            },
            `/person/${id}`
        );
    };

    return (
        <div>
            <Seo title="Home" />
            {!data && <h4>Loading...</h4>}
            {data?.map((person) => {
                return (
                    <div
                        onClick={() => goToDetail(person.id)}
                        key={person.id}
                        className="bg-slate-500"
                    >
                        <img src={`${person.squareImage}`} />
                        <h4>{person.name}</h4>
                        <h5>{person.industries}</h5>
                    </div>
                );
            })}
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://billions-api.nomadcoders.workers.dev`);
    const data = await res.json();
    return {
        props: {
            data,
        },
    };
}
