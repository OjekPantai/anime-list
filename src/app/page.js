"use client";

import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();
  return (
    <>
      {/* Most Popular Anime List */}
      <section>
        <Header title="Popular" linkTitle="View All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
