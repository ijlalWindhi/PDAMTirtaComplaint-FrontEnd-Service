import React, { useState, useEffect } from "react";
import { Box, Text, FormLabel, Image } from "@chakra-ui/react";
import axios from "axios";
import { URL_Image } from "../../../utils/constants";

export default function SaranaForm() {
    // get id from local storage
    const res = JSON.parse(localStorage.getItem("item"));
    const id = res.id;

    // state for respons data API
    const [data, setData] = useState([]);

    // initialize URL API
    const API_REPORT = "http://localhost:2004/report/" + id;
    const URL_ImageReport = URL_Image + "report/";

    // get data from API
    useEffect(() => {
        axios.get(API_REPORT).then((res) => {
            setData(res.data.data);
        });
    }, []);

    return (
        <Box>
            <FormLabel fontWeight={"bold"}>Judul Pengaduan</FormLabel>
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
}
