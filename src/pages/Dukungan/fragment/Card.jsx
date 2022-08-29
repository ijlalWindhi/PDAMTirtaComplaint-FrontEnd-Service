import React from "react";
import IconSarana from "../../../assets/image/icon-sarana.svg";
import IconPembayaran from "../../../assets/image/icon-pembayaran.svg";
import IconPelayanan from "../../../assets/image/icon-pelayanan.svg";
import { Link } from "react-router-dom";
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";

export default function Card() {
    const data = [
        { name: "Pembayaran", icon: IconPembayaran, link: "/dukungan" },
        { name: "Sarana", icon: IconSarana, link: "/dukungan/pengaduanSarana" },
        {
            name: "Riwayat Laporan",
            icon: IconPelayanan,
            link: "/riwayatLaporan",
        },
    ];

    return (
        <Box>
            <Grid
                gap={4}
                templateColumns={{ md: "repeat(3, 1fr)" }}
                justifyContent="center"
            >
                {data.map((item, index) => {
                    return (
                        <Link to={item.link} key={index}>
                            <GridItem key={index}>
                                <Image
                                    src={item.icon}
                                    width={["50%", "60%"]}
                                    padding={"20px"}
                                    bg={"gray.200"}
                                    borderRadius={"20px"}
                                    mx={"auto"}
                                />
                                <Text align={"center"} fontSize={"lg"} my={2}>
                                    {item.name}
                                </Text>
                            </GridItem>
                        </Link>
                    );
                })}
            </Grid>
        </Box>
    );
}
