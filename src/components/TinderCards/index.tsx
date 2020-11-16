import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { AxiosResponse } from "axios";
import api from "../../services/api";

import styles from "./styles";

interface InvestListResponse {
  type: String;
  id: String;
}

interface AcaoResponse {
  id: Number;
  day: String;
  codbdi: String;
  codneg: String;
  tpmerc: String;
  nomres: String;
  especi: String;
  prazot: String;
  modref: String;
  preabe: String;
  premin: String;
  premax: String;
  premed: String;
  preult: String;
  preofc: String;
  preofv: String;
  preexe: String;
  totneg: String;
  quatot: String;
  voltot: String;
  indopc: String;
  fatcot: String;
  ptoexe: String;
  codisi: String;
  dismes: String;
  datven: String;
  created_at: String;
  updated_at: String;
  status: String;
  err: String;
}

interface RendaResponse {
  rendimento: Rendimento;
  _id: String;
  nome: String;
  prazo: Number;
  valorMin: Number;
  createdAt: String;
  __v: Number;
}

interface Rendimento {
  desc: String;
  porcentagemMes: Number;
}

const colors = {
  red: "#ec2379",
  blue: "#0070ff",
  green: "#00BF64",
  gray: "#777777",
  black: "#000000",
  white: "#ffffff",
};

const AcaoCard = ({ id }) => {
  const [cardData, setCardData] = useState<AcaoResponse>();
  
  useEffect(() => {
    console.log(id)
    api.get(`/acao/${id}`).then((response) => {
      response.data.forEach((item: AcaoResponse) =>
        item.status === "Success" ? setCardData(item) : null
      );

      console.log(cardData);
    });
  }, []);

  return (
    <View style={styles.card}>
      <Text>{cardData?.day}</Text>
    </View>
  );
};

const RendaCard = ({ id }) => {
  const [cardData, setCardData] = useState<RendaResponse>();
  
  useEffect(() => {
    console.log(id)
    api.get(`/acao/${id}`).then((response) => {
      setCardData(response.data);

      console.log(cardData);
    });
  }, []);

  return (
    <View style={styles.card}>
      <Text>{cardData?.nome}</Text>
    </View>
  );
};

/*
const Card = (cardInfo: InvestListResponse) => {
  const [cardAcaoData, setCardAcaoData] = useState<AcaoResponse>();
  const [cardRendaData, setCardRendaData] = useState<RendaResponse>();

  useEffect(() => {
    // if (cardInfo.type === "acao") {
    //   api.get(`/acao/${cardInfo.id}`).then((response) => {
    //     response.data.forEach(item => item.status === "Success" ? setCardAcaoData(item) : null);
    //     console.log(cardAcaoData)
    //   });
    // } else {
    //   api.get(`/renda/${cardInfo.id}`).then((response) => {
    //     setCardRendaData(response.data);
    //     console.log(cardRendaData)
    //   });
    // }
    api.get("/acao/PETR3").then((response) => {
      const data = response.data;
      console.log(data);
    });
  }, []);

  return (
    <View style={styles.card}>
      {cardInfo.type == "acao" ? (
        <Text>{cardAcaoData ? cardAcaoData.day : "aaa"}</Text>
      ) : (
        <Text>{cardRendaData ? cardRendaData.nome : "bbb"}</Text>
      )}
    </View>
  );
};*/

const Card = (info: InvestListResponse) => (
  <>
  {
    info.type == 'acao'
    ? <AcaoCard id={info.id} />
    : <RendaCard id={info.id} />
  }
  </>
);

export default function TinderCards() {
  const [investList, setInvestList] = useState<InvestListResponse[]>([]);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState<InvestListResponse>({ type: "", id: "" });

  useEffect(() => {
    api.get("/user/myinvests").then((response) => {
      setInvestList(response.data);
      setData(investList[index]);
      console.log(data)
    });
  }, []);

  const onSwiped = () => {
    setIndex(index + 1);
    setData(investList[index]);
  };

  return (
    <View style={styles.swiperContainer}>
      <Swiper
        cards={investList}
        cardIndex={index}
        renderCard={() => <Card type={data.type} id={data.id} />}
        onSwiped={onSwiped}
        stackSize={13}
        stackScale={10}
        stackSeparation={15}
        disableBottomSwipe
        animateOverlayLabelsOpacity
        animateCardOpacity
        backgroundColor={"transparent"}
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                backgroundColor: colors.red,
                color: colors.white,
                fontSize: 24,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 20,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: "LIKE",
            style: {
              label: {
                backgroundColor: colors.green,
                color: colors.white,
                fontSize: 24,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 20,
                marginLeft: 20,
              },
            },
          },
        }}
      />
    </View>
  );
}
