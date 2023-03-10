
import Axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ItemList from '../src/components/itemList';
import { Header, Divider, Loader } from 'semantic-ui-react';
import styles from '../styles/Home.module.css'
export default function Home({list}) {
  // const [list, setList] = useState([]);
  // const [isLoding, setIsLoading] = useState(true);
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // function getData() {
  //   Axios.get(API_URL).then((res) => {
  //     console.log(res.data);
  //     setList(res.data);
  //     setIsLoading(false);
  //   },);
  // }

  // useEffect(() => {
  //   getData();
  // }, );

  return (
    <div>
      <Head>
        <title>HOME | 코딩앙마</title>
        <meta name='description' content='코딩 앙마 홈입니다.'></meta>
      </Head>

      {/* {isLoding && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>Loading</Loader>
        </div>
      )}
      {!isLoding && ( */}
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
   props: {
      list: data,
      nama: process.env.name,
   },
  };
}
