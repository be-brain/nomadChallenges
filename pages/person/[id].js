import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Seo from "../../components/Seo";

const Detail = () => {
    const router = useRouter();

    return (
        <div>
            <Seo title="Detail" />
            <div>{router.query.id || "Loading..."}</div>
            {/* {!detailInfo && <h4>Loading...</h4>}
            {detailInfo?.map((person) => {
                return (
                    <div key={person.id} className="bg-slate-500">
                        <img src={`${person.squareImage}`} />
                        <h4>{person.name}</h4>
                        <h5>{person.industries}</h5>
                        <div>{person.country}</div>
                        <div>{person.city}</div>
                    </div>
                );
            })} */}
        </div>
    );
};

export default Detail;
