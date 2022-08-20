import React, { useState, useEffect } from "react";
import {
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    useDisclosure,
    Text,
} from "@chakra-ui/react";
import ModalReview from "./ModalReview";

export default function SaranaForm() {
    const [isDisable, setIsDisable] = useState(true);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (
            name !== "" &&
            date !== "" &&
            address !== "" &&
            description !== "" &&
            image !== ""
        ) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    });

    return (
        <Box>
            <ModalReview
                isOpen={isOpen}
                onClose={onClose}
                name={name}
                date={date}
                address={address}
                description={description}
                image={image}
            />
            <FormControl method="POST" isRequired>
                <FormLabel>Judul Pengaduan</FormLabel>
                <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Kerusakan meteran air"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <FormLabel mt={4}>Tanggal*</FormLabel>
                <Input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <FormLabel mt={4}>Alamat</FormLabel>
                <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Jl. Raya Cikarang No.1"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                />
                <FormLabel mt={4}>Deskripsi</FormLabel>
                <Textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Kerusakan meteran air sudah terjadi sejak 2 hari lalu dan sampai saat ini masih belum bisa digunakan"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <FormLabel mt={4}>Gambar</FormLabel>
                <Input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <Button
                    mt={4}
                    bg="blue.400"
                    textColor={"white"}
                    type="submit"
                    onClick={onOpen}
                    disabled={isDisable}
                >
                    Kirim
                </Button>
            </FormControl>
        </Box>
    );
}
