import React from "react";
import {useFormik} from "formik";
import {useQueryCache} from "react-query";
import {useRef} from "react";
import {
    Box,
    Grid,
    GridItem,
    Button,
    useDisclosure,
    Input,
    Stack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {RestaurantsService} from "../../services";

export default function AddComponent() {
    const queryClient = useQueryCache();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef: any = useRef();
    const formik = useFormik({
        initialValues: {
            ResID: "",
            Name: "",
            Phone: "",
            Location: "",
            ImgURL: "",
        },

        onSubmit: async (values, {resetForm}) => {
            await RestaurantsService.AddARestaurant(values);
            resetForm({});
            await queryClient.invalidateQueries('restaurants');
            onClose();
        },
    });
    return (
        <>
            <Box borderWidth="1px" borderRadius="lg" margin={1} w="100%" p={1}>
                <Grid templateColumns="repeat(6, 1fr)" align="center" gap={6}>
                    <GridItem colStart={6}>
                        <Button leftIcon={<AddIcon/>} colorScheme="teal" onClick={onOpen}>
                            Add Restaurant
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Add New Restaurant</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={1}>
                                <Input
                                    id="ResID"
                                    placeholder="ResID"
                                    value={formik.values.ResID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="Name"
                                    placeholder="Name"
                                    value={formik.values.Name}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="Phone"
                                    placeholder="Phone"
                                    value={formik.values.Phone}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="Location"
                                    placeholder="Location"
                                    value={formik.values.Location}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="ImgURL"
                                    placeholder="ImgURL"
                                    value={formik.values.ImgURL}
                                    onChange={formik.handleChange}
                                />
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue" onClick={() => formik.handleSubmit}>
                                Add
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}
