import React from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      url
      description
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);

  return (
    <div>
      {data && (
        <>
          {data.feed.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
