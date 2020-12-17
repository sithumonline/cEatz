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
import {OrdersService} from "../../services";

export default function AddComponent() {
    const queryClient = useQueryCache();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef: any = useRef();
    const formik = useFormik({
        initialValues: {
            CusID: "",
            OrdID: "",
            ResID: "",
            NoItems: "",
            paymentWay: "",
        },

        onSubmit: async (values, {resetForm}) => {
            await OrdersService.AddAOrder(values);
            resetForm({});
            await queryClient.invalidateQueries('orders');
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
                        <DrawerHeader>Add New Order</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={1}>
                                <Input
                                    id="CusID"
                                    placeholder="CusID"
                                    value={formik.values.CusID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="OrdID"
                                    placeholder="OrdID"
                                    value={formik.values.OrdID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="ResID"
                                    placeholder="ResID"
                                    value={formik.values.ResID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="NoItems"
                                    placeholder="NoItems"
                                    value={formik.values.NoItems}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="paymentWay"
                                    placeholder="paymentWay"
                                    value={formik.values.paymentWay}
                                    onChange={formik.handleChange}
                                />
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue" onClick={() => formik.handleSubmit()}>
                                Add
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}
