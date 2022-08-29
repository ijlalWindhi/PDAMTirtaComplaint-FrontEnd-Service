import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, FormLabel, Image } from "@chakra-ui/react";
import { API_URL, URL_Image } from "../../../utils/constants";

export default function HistoryItem() {
    const res = JSON.parse(localStorage.getItem("item"));
    const id = res.id;

    const [data, setData] = useState([]);
    const API_HISTORY = API_URL + "report/history/" + id;
    const URL_ImageReport = URL_Image + "report/";

    const getData = async () => {
        try {
            await axios.get(API_HISTORY).then((res) => {
                setData(res.data.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <Box>
            {data.map((data, index) => {
                return (
                    <Box
                        key={index}
                        borderWidth={1}
                        borderRadius={"xl"}
                        p={6}
                        mt={4}
                    >
                        <FormLabel fontWeight={"bold"}>
                            Judul Pengaduan
                        </FormLabel>
                        <Box
                            maxW={"100%"}
                            borderWidth={1}
                            borderRadius={"md"}
                            px={4}
                            py={2}
                        >
                            <Text fontSize={"md"}>{data.name}</Text>
                        </Box>
                        <FormLabel fontWeight={"bold"} mt={4}>
                            Tanggal
                        </FormLabel>
                        <Box
                            maxW={"100%"}
                            borderWidth={1}
                            borderRadius={"md"}
                            px={4}
                            py={2}
                        >
                            <Text fontSize={"md"}>{data.date}</Text>
                        </Box>
                        <FormLabel fontWeight={"bold"} mt={4}>
                            Alamat
                        </FormLabel>
                        <Box
                            maxW={"100%"}
                            borderWidth={1}
                            borderRadius={"md"}
                            px={4}
                            py={2}
                        >
                            <Text fontSize={"md"}>{data.address}</Text>
                        </Box>
                        <FormLabel fontWeight={"bold"} mt={4}>
                            Deskripsi
                        </FormLabel>
                        <Box
                            maxW={"100%"}
                            maxH={"100%"}
                            borderWidth={1}
                            borderRadius={"md"}
                            px={4}
                            py={2}
                        >
                            <Text fontSize={"md"}>{data.description}</Text>
                        </Box>
                        <FormLabel fontWeight={"bold"} mt={4}>
                            Gambar
                        </FormLabel>
                        <Box
                            maxW={"100%"}
                            borderWidth={1}
                            borderRadius={"md"}
                            px={4}
                            py={4}
                        >
                            <Image src={URL_ImageReport + data.image} />
                        </Box>
                    </Box>
                );
            })}
        </Box>
    );
}
