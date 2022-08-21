import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "../../../utils/constants";

export default function ModalReview(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const value = JSON.parse(localStorage.getItem("item"));
    const id = value.id;

    useEffect(() => {
        setName(props.name);
        setDate(props.date);
        setAddress(props.address);
        setDescription(props.description);
        setImage(props.image);
    }, [props]);

    const PENGADUAN_URL = API_URL + "report/add";
    const submitHandler = async (e) => {
        let form = new FormData();
        form.append("id_user", id);
        form.append("name", name);
        form.append("date", date);
        form.append("address", address);
        form.append("description", description);
        form.append("image", image);

        try {
            axios.post(PENGADUAN_URL, form).then((res) => {
                // set loading button
                setIsLoading(true);
                // reload page
                window.location.reload();
                console.log(res);
                alert("Sukses memberikan pengaduan");
                // navigate page to login
                window.location = "/dukungan/reviewFeedback";
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Modal isOpen={props.isOpen} onClose={props.onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Review Report</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl method="POST">
                            <FormLabel>Judul Pengaduan</FormLabel>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <FormLabel mt={4}>Tanggal</FormLabel>
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
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <FormLabel mt={4}>Deskripsi</FormLabel>
                            <Textarea
                                type="text"
                                name="description"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                            <FormLabel mt={4}>Gambar</FormLabel>
                            <Text fontSize={"md"} mb={2}>
                                {image.name}
                            </Text>
                            <Input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="red"
                            mr={3}
                            onClick={props.onClose}
                        >
                            Batal
                        </Button>
                        <Button
                            colorScheme={"blue"}
                            isLoading={isLoading}
                            onClick={() =>
                                submitHandler({
                                    name,
                                    date,
                                    address,
                                    description,
                                    image,
                                })
                            }
                        >
                            Kirim
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
